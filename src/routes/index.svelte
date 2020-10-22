<script>

</script>


<svelte:head>
	<title>Sign Up | Time Bank</title>
</svelte:head>

<div class="main">
	<h1>Login</h1>

	<div>
		<form action="">
			<div>
				<label for="email">
					Email Address:
					<input id="email" type="email" placeholder="example@gmail.com">
				</label>
			</div>

			<div>
				<label for="password">
					Password:
					<input id="password" type="password" >
				</label>
			</div>

			<div>
				<button type="submit" class="submit">Sign In</button>
			</div>
		</form>
	</div>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	label {
		display: flex;
		flex-direction: column;
		color: var(--secondary-color);
	}

	h1 {
		width: 100%;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.submit {
		width: 15.8em;
		padding: 0.8em 0;
	}
</style>

