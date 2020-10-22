<script>
    import JobCard from '../../components/dashboard/JobCard.svelte'

</script>

<svelte:head>
    <title>Dashboard | Time Bank</title>
</svelte:head>

<div>
    <div class="row">
        <div class="count">
            <div>Coins</div>
            <div>0</div>
        </div>
        <div class="add">
            <button>Add Job</button>
        </div>
    </div>

    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />

</div>

<style>
    .row {
        display: flex;
        width: 100%;
    }

    .count {
        display: flex;
        width: 50%;
        margin-left: 10px;
        padding-left: 20px;
        padding-right: 10px;
        margin-right: 10px;
        justify-content: space-between;
        color: #fff;
        background-color: var(--primary-color);
        font-size: 30px;
        font-weight: 700;
    }

    .add {
        display: flex;
        justify-content: center;
        width: 50%;
    }

    button {
        padding-left: 50px;
        padding-right: 50px;
        color: var(--secondary-color);
        font-weight: 700;
        background-color: var(--accent-color-1);
    }
</style>
