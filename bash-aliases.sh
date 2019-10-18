# Open this file and reload it so that any previous changes can be used in the current terminal.
bashalias() {
    path='/home/rogier/projects/rogier-playground/bash-aliases.sh'
    
    gedit $path
    source $path
}

# Edit the hosts file.
hosts() {
    sudo nano /etc/hosts
}

# Determine the branch from the story key.
# Then, create the branch. If it exists already, update to it instead.
#
# TODO: Handle closed branches. It tries to create it but fails.
hgstory() {
    story=$1
    
    hg pull
    
    branch="feature/$story"
    existingBranch=`hg branches | grep "$branch"`
    
    if [ ! -z "$existingBranch" ]; then
        echo "Upping to branch $branch"
        
        hg up $branch -C
    else
        echo "Creating branch $branch from default"
        
        hg up default -C
        hg branch $branch
    fi
}

# Run the docker-compose command from any directory.
#
# This accepts an argument as the second parameter.
# If a project directory is given as the second parameter, instead it navigates to that directory.
dockercd() {
    command=$1
    arguments=$2
    directory=""
    
    targetDirectory="/home/rogier/projects/$2"
    
    if [ "$2" ] && [ -d "$targetDirectory" ]; then
        arguments=""
        directory=$targetDirectory
    fi
    
    initialDirectory=$PWD
    cd /home/rogier/projects/dockerhero
    
    docker-compose $command $arguments
    
    if [ "$directory" ]; then
        cd $directory
    else
        cd $initialDirectory
    fi
}

# Kill docker containers and then start everything up again, asynchronously.
dockerreboot() {
    dockercd down
    dockercd up --no-start
    dockercd start
}

# Set the php version in the docker-compose.override.yml file and then reboot docker.
dockerphpversion() {
    sed -i "s/dockerhero-php-[0-9.]*-/dockerhero-php-$1-/" /home/rogier/projects/dockerhero/docker-compose.override.yml
    
    dockerreboot
}


# Clone the given Mercurial repository from Bitbucket.
hgclone() {
    repository=$1
    hg clone ssh://hg@bitbucket.org/way2dev/$repository
}

# Clone the given Git repository from Bitbucket
gitclone() {
    repository=$1
    git clone git@bitbucket.org:way2dev/$repository.git
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
    
    xdg-open $url
}

# Merge default into release/accept for deploying to acceptance,
# then show the application in Puppet Pipelines.
#
# To make sure the correct branch is used, we ask the user for confirmation first.
hgAcceptance() {
    # If you push multiple branches at once, the auto build hook fails to fire. To prevent this, we push what we have first.
    hg push
    
    hg pull
    
    branch=`hgGetAcceptanceBranch`
    
    if [ -z "$branch" ]; then
        echo "Failed to find branch"
        
        return
    fi
    
    read -p ">> Deploying to $branch branch, is this correct? Y/N: " confirmation
    
    if [ $confirmation != 'Y' ] && [ $confirmation != 'y' ]; then
        return
    fi
    
    hg up $branch -C
    
    hg merge default
    hg commit -m "Merge with default"
    hg push
    
    repository=`basename $PWD`
    
    openPuppetPage $repository
}

# Finds the branch that corresponds to the acceptance environment, which is automatically deployed on every commit.
hgGetAcceptanceBranch() {
    if [[ ! -z `hg log -b accept 2> /dev/null` ]]; then
        echo accept
        
        return
    fi
    
    if [[ ! -z `hg log -b release 2> /dev/null` ]]; then
        echo release
        
        return
    fi
    
    # No branch found
    return
}

# Run Ngrok for the given project
ngrokStart() {
    ./ngrok http 127.0.0.1:80 -host-header=$1.localtest.me
}

# Explode the supplied string into parts, and grep each one in the supplied directory.
# For any that are not found, make this clear to the user.
#
# This can be used, for example, to find unused translations in CodeIgniter that can be deleted.
grepExplode() {
    echo
    
    for word in $(echo $2 | tr "," "\n")
    do
        result=`grep -rn $word $1`
        
        if [ -z "$result" ]; then
            echo "Result is empty for $word"
        fi
    done
}

# Show the current story in JIRA, based on the current branch or a given branch.
showStory() {
    story=$1
    
    if ! [ "$story" ]; then
        branch=`hg branch`
        prefix=${branch:0:8}
        featurePrefix="feature/"
        
        if [ "$prefix" == "$featurePrefix" ]; then
            story=${branch:8}
        fi
    fi
    
    if [ "$story" ]; then
        url=https://way2web.atlassian.net/browse/$story
        
        xdg-open $url
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
    repository=`basename $PWD`
    url="https://bitbucket.org/way2dev/$repository/branches/compare/$1..$2#diff"
    
    xdg-open $url
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
        if [ ! -f $file ]; then
            touch $file;
        fi;
        tail -f $file | grep --color=auto -C5 $1;
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

# Command for when i arrive at work to start up all the apps i use, etc.
startEverything() {
    firefox
    slack
    dockercd start
    code
    thg &
    
    gnome-terminal
    sshDockerhero
}

# Run the previous command in sudo. For when something doesn't work for some stupid permissions-related reason.
alias fuck='sudo $(history -p \!\!)'
