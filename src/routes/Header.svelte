<header>
	<div class="logo">PrismiKit</div>

	<nav><slot></slot></nav>
</header>

<style>
	header {
		padding-block: 20px;
		display: grid;
		grid-template-columns: 1fr auto;
		font-size: 1.2rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-weight: 700;
	}
</style>
