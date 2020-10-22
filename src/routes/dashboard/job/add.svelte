<script>
    let title = '';
    let duration = 0;
    let category = '';
    let location = '';
</script>


<div class="main">
    <h1>Add a Job</h1>
    <form action="">
        <label for="title">
            Title
            <input type="text" bind:value={title}>
        </label>

        <label for="duration">
            Duration
            <input type="number" min="0" max="10" bind:value={duration}>
        </label>

        <label for="category">
            Category
            <input type="text" bind:value={category}>
        </label>

        <label for="location">
            Location
            <input type="text" bind:value={location}>
        </label>

        <div class="primary-button-container">
            <button class="primary-button">Save</button>
        </div>

    </form>
</div>

<style>
    .main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    label {
        display: flex;
        flex-direction: column;
        color: var(--secondary-color);
    }

</style>
