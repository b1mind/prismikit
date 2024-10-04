<header>
	PrismiKit

	<nav><slot></slot></nav>
</header>

<style>
	header {
		padding: 20px;
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
