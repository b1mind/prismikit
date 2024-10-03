<header>
	PrismiKit

	<nav><slot></slot></nav>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 1.5rem;
	}
</style>
