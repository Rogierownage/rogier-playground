# Open this file and reload it so that any previous changes can be used in the current terminal.
bashalias() {
    aliasPath='/home/developer/projects/rogier-playground/bash-aliases.sh'
    
    gedit $aliasPath
    source $aliasPath
}

# Edit the hosts file.
hosts() {
    sudo gedit /etc/hosts
}

# Determine the branch from the story key.
# Then, create the branch. If it exists already, update to it instead.
#
# TODO: Handle closed branches. It tries to create it but fails.
hgstory() {
    story=$1
    
    hg pull
    
    branch="feature/$story"
    existingBranch=$(hg branches | grep "$branch")
    
    if [ ! -z "$existingBranch" ]; then
        echo "Upping to branch $branch"
        
        hg up "$branch" -C
    else
        echo "Creating branch $branch from default"
        
        hg up default -C
        hg branch "$branch"
    fi
}

# Run the docker-compose command inside the dockerhero directory, and then return to the directory you were in.
herocd() {    
    initialDirectory=$PWD
    
    cd /home/developer/projects/dockerhero
    
    docker-compose "$@"
    
    cd $initialDirectory
}

# Run the make command inside the workspace directory, and then return to the directory you were in.
kubecd() {
    command=$1
    arguments=$2
    
    initialDirectory=$PWD
    
    cd /home/developer/projects/workspace
    
    make $command $arguments
    
    cd $initialDirectory
}

# Kill dockerhero containers and then start everything up again, asynchronously.
heroreboot() {
    herocd down
    herocd --profile phpmyadmin up --force-recreate --no-start
    herocd --profile phpmyadmin start
}

# Set the php version in the docker-compose.override.yml file and then reboot dockerhero.
herophpversion() {
    sed -i "s/dockerhero-php-[0-9.]*/dockerhero-php-$1/" /home/developer/projects/dockerhero/docker-compose.override.yml
    sed -i "s/dockerhero-workspace\:php[0-9.]*/dockerhero-workspace:php$1/" /home/developer/projects/dockerhero/docker-compose.override.yml
    
    heroreboot
}

# Stop dockerhero and then start the workspace for the local kubernetes environment.
#
# If a parameter is given, it will navigate to that project and run docker-compose start to get it running right away.
herotokube() {
    herocd stop
    kubecd start
    
    if [ "$1" ]; then
        cd ~/projects/$1
        
        docker-compose up -d
    fi
}

# Stop the workspace for the local kubernetes environment and then start dockerhero.
kubetohero() {
    kubecd stop
    herocd start
}

sshkube() {
    if [ "$1" ]; then
        cd ~/projects/$1
    fi
    
    docker compose exec -it php-fpm sh
}

# Clone the given Mercurial repository from Bitbucket.
hgclone() {
    repository=$1
    hg clone ssh://hg@bitbucket.org/way2dev/"$repository"
}

# Clone the given Git repository from Bitbucket
gitclone() {
    repository=$1
    git clone git@bitbucket.org:way2dev/"$repository".git
}

# View hg diff inside of Less.
hgdiff() {
    hg diff | less
}

# View hg st inside of Less.
hgst() {
    hg st | less
}

# Replicate hg purge functionality without using the extension.
hgpurge() {
    hg st -un0 | xargs -0 rm
}

# Update packages and then autoremove old versions.
updateAndRemove() {
    sudo apt update
    sudo apt upgrade
    sudo apt autoremove
}

# Update packages, autoremove, and then close the terminal.
updateAndExit() {
    updateAndRemove
    
    exit
}

# Run bitbucket pipelines validation.
pipelines() {
    bash bitbucket-pipelines/validation.sh
}

# Opens the application page for the repository in Puppet Pipelines (formerly Distelli)
openPuppetPage() {
    repository=$1
    url=https://pipelines.puppet.com/way2devops/apps/$repository
    
    xdg-open "$url"
}

# Merge default into release/accept for deploying to acceptance,
# then show the application in Puppet Pipelines.
#
# To make sure the correct branch is used, we ask the user for confirmation first.
hgAcceptance() {
    # If you push multiple branches at once, the auto build hook fails to fire. To prevent this, we push what we have first.
    hg push
    
    hg pull
    
    branch=$(hgGetAcceptanceBranch)
    
    if [ -z "$branch" ]; then
        echo "Failed to find branch"
        
        return
    fi
    
    read -p ">> Deploying to $branch branch, is this correct? Y/N: " confirmation
    
    if [ "$confirmation" != 'Y' ] && [ "$confirmation" != 'y' ]; then
        return
    fi
    
    hg up "$branch" -C
    
    hg merge default
    hg commit -m "Merge with default"
    hg push
    
    repository=$(basename $PWD)
    
    openPuppetPage "$repository"
}

# Finds the branch that corresponds to the acceptance environment, which is automatically deployed on every commit.
hgGetAcceptanceBranch() {
    if [[ ! -z $(hg log -b accept 2> /dev/null) ]]; then
        echo accept
        
        return
    fi
    
    if [[ ! -z $(hg log -b release 2> /dev/null) ]]; then
        echo release
        
        return
    fi
    
    # No branch found
    return
}

# Run Ngrok for the given project
ngrokStart() {
    ./ngrok http 127.0.0.1:80 -host-header="$1".localtest.me
}

# Explode the supplied string into parts, and grep each one in the supplied directory.
# For any that are not found, make this clear to the user.
#
# This can be used, for example, to find unused translations in CodeIgniter that can be deleted.
grepExplode() {
    echo
    
    for word in $(echo "$2" | tr "," "\n")
    do
        result=$(grep -rn "$word" $1)
        
        if [ -z "$result" ]; then
            echo "Result is empty for $word"
        fi
    done
}

# Show the current story in JIRA, based on the current branch or a given branch.
showStory() {
    story=$1
    
    if ! [ "$story" ]; then
        branch=$(hg branch)
        prefix=${branch:0:8}
        featurePrefix="feature/"
        
        if [ "$prefix" == "$featurePrefix" ]; then
            story=${branch:8}
        fi
    fi
    
    if [ "$story" ]; then
        url=https://way2web.atlassian.net/browse/$story
        
        xdg-open "$url"
    fi
}

# Open a new terminal and close the old one, basically rebooting it.
refTerm() {
    gnome-terminal
    disown
    exit
}

# Opens the Bitbucket page to diff the two revisions.
diffRevisions() {
    repository=$(basename $PWD)
    url="https://bitbucket.org/way2dev/$repository/branches/compare/$1..$2#diff"
    
    xdg-open "$url"
}

# Delete all the Laravel logs for the current repository.
clearLogs() {
    rm -r storage/logs/*.log
}

# Track the Laravel log for the given word, including incoming messages.
trackLog()
{
    if [ -d storage ]; then
        file=$PWD/storage/logs/laravel-$(date +%Y-%m-%d).log;
        if [ ! -f "$file" ]; then
            touch "$file";
        fi;
        tail -f "$file" | grep --color=auto -C5 "$1";
    else
        echo "Only compatible with laravel style logging";
        exit 1;
    fi
}

# Run any necessary ide helpers for vsCode
vscodeIdeHelpers()
{
    ./artisan ide-helper:meta
}

# Replace the images for the memory game with a better alternative.
betterMemoryGame()
{
    rm ~/projects/jtipor/public_html/dist/winston-memory/images/deck/ -r
    cp ~/Documents/smoking-animals/deck ~/projects/jtipor/public_html/dist/winston-memory/images -r
}

# Command for when i arrive at work to start up all the apps i use, etc. Also runs a system update.
# Note: I close the terminal that's running all the apps, because otherwise i get weird errors from firefox when i enter the Docker container.
# I also open one terminal for using the docker container and one for other stuff.
startEverything() {
    gnome-terminal --working-directory="projects" &
    gnome-terminal --working-directory="projects" &
    firefox &
    slack &
    code &
    gitkraken &
    herocd start

    xterm -hold -e 'source /home/developer/projects/rogier-playground/bash-aliases.sh; updateAndRemove' &
	
    exit
}

# Play the game "Descent 2 (DEMO)"
game() {
    d2x-rebirth   
}

# Fix the hosts file when the docker host IPs have changed, like after changing PHP version.
fixDockerHosts() {
    dockerHosts=$(dockerHosts)
    dockerHostsAsArray=($(echo "$dockerHosts"))

    previousIterator=1
    iterator=1
    for i in "${dockerHostsAsArray[@]}"
    do
        if [ "$i" = "dockerhero_web" ]; then
            dockerHostWeb="${dockerHostsAsArray[$previousIterator]}"
	fi
	if [ "$i" = "dockerhero_php" ]; then
            dockerHostPhp="${dockerHostsAsArray[$previousIterator]}"
	fi
	if [ "$i" = "dockerhero_workspace" ]; then
            dockerHostWorkspace="${dockerHostsAsArray[$previousIterator]}"
	fi
	if [ "$i" = "dockerhero_db" ]; then
            dockerHostDb="${dockerHostsAsArray[$previousIterator]}"
	fi
	if [ "$i" = "dockerhero_redis" ]; then
            dockerHostRedis="${dockerHostsAsArray[$previousIterator]}"
	fi
	if [ "$i" = "dockerhero_mail" ]; then
            dockerHostMail="${dockerHostsAsArray[$previousIterator]}"
	fi

        previousIterator=$iterator
        iterator=$(expr $iterator + 1)
    done

    sudo sed -i "s/.*dockerhero_web/$dockerHostWeb dockerhero_web/" /etc/hosts
    sudo sed -i "s/.*dockerhero_php/$dockerHostPhp dockerhero_php/" /etc/hosts
    sudo sed -i "s/.*dockerhero_workspace/$dockerHostWorkspace dockerhero_workspace/" /etc/hosts
    sudo sed -i "s/.*dockerhero_db/$dockerHostDb dockerhero_db/" /etc/hosts
    sudo sed -i "s/.*dockerhero_redis/$dockerHostRedis dockerhero_redis/" /etc/hosts
    sudo sed -i "s/.*dockerhero_mail/$dockerHostMail dockerhero_mail/" /etc/hosts
}

# Run Yarn watch in the Venapp frontend
yarnvenapp() {
    cd /home/developer/projects/venapp/resources/assets/front/src || exit

    yarn watch
}

# Run Yarn watch in the JTI F&P frontend
yarnjtifp() {
    cd /home/developer/projects/jtipor/resources/assets/food-petrol/src || exit

    yarn watch
}

# Starts Gitkraken and starts the dockerhero container.
startup() {
    gitkraken
    herocd start
}

updateGitKraken() {
    echo '-------------------'
    echo 'Downloading release'
    echo '-------------------'
    wget -O gitkraken.deb https://release.gitkraken.com/linux/gitkraken-amd64.deb
    echo '-------------------'
    echo 'Installing release'
    echo '-------------------'
    sudo dpkg -i ./gitkraken.deb
    sudo apt-get install -f
    echo '-------------------'
    echo 'Remove release'
    echo '-------------------'
    rm ./gitkraken.deb
}

prepush() {
    ./.git/pre-push.sh
}

kubedash() {
    kubectl auth-proxy -n cyso-system https://paqt-dashboard-kubernetes-dashboard.svc
}

kubedashacc() {
    kubectl config use-context openid-shared.kubernetes.accept.cyso.paqt.network

    kubedash
}

kubedashprod() {
    kubectl config use-context openid-shared.kubernetes.production.cyso.paqt.network
    
    kubedash
}

# Run make down and make up for both the paqapp and paqapp-web repositories.
makepaqapp() {
    cd ~/projects/paqapp
    
    make down
    make up
    
    cd ~/projects/paqapp-web
    
    make down
    make up
}

# Run an artisan command inside the socapp-worker container.
workerartisan() {
    docker compose exec worker-subscriber php artisan $1
}

# Run a given command a given number of times.
repeattimes() {
    for i in {1.."$1"}; do "${@:2}"; done
}

# Shorthand for php artisan
art() {
    php artisan "$@"
}

# Shorthand for php artisan tinker
tink() {
    php artisan tinker
}

# Add composer to path
export PATH="$PATH:$HOME/.composer/vendor/bin" # load composer

# Run the previous command in sudo. For when something doesn't work for some stupid permissions-related reason.
alias fuck='sudo $(history -p \!\!)'
