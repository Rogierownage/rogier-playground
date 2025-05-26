<div class="row">
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h2 class="heading-flush">
                    <i class="fa fa-btn fa-home"></i>
                    @yield('title')
                </h2>
            </div>
            <div class="panel-body">
                @foreach($taxiCompanies as $company)
                    <p>
                        Company:
                        {{ $company->name }}
                        ({{ $company->id }}) |
                        {{ $company->name_normalized }} |
                        Last region:
                        {{ $company->lastRegion->name }} |
                        {{ $company->lastRegion->created_at->format('d-m-Y') }} |
                        Alphabetical first region:
                        {{ $company->alphabetical_first_region_created_at->format('d-m-Y') }}
                    </p>
                @endforeach

                <br>
                <br>
                <br>

                <p>Active: {{ $wmoBudgetStatusCounts->active_count }}</p>
                <p>Inactive: {{ $wmoBudgetStatusCounts->inactive_count }}</p>

                <br>
                <br>
                <br>

                @foreach($regionsForFirstCompany as $region)
                    <p>Region: {{ $region->name }} | Company: {{ $region->taxiCompany->name }}</p>
                @endforeach

                <p>
                    @foreach($wmoBudgetsSortedByUserName as $budget)
                        {{ $budget->id }}: {{ $budget->user->name }} |
                    @endforeach
                </p>

                @foreach($usersSortedByVerifiedAt as $user)
                    <p>{{ $user->email_verified_at }} ({{ $user->id }})</p>
                @endforeach
            </div>
        </div>
    </div>
</div>
