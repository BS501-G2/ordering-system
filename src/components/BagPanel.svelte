<div class="bag">
	<h2>My Bag</h2>
	<div class="bag-content"></div>
	<div class="bag-footer">
		<div class="total">
			<p><b>Total:</b></p>
			<p><i>P 0.00</i></p>
		</div>
		<button class="checkout-button">Proceed to Checkout</button>
	</div>
</div>

<style lang="scss">
	div.bag {
		background-color: var(--backgroundVariant);

		display: flex;
		flex-direction: column;

		min-width: 320px;
		max-width: 320px;
		box-sizing: border-box;

		border-radius: 1em;

		> h2 {
			text-align: center;
			margin: 0px;
			padding: 16px;
			font-size: 24px;
			font-weight: lighter;
		}

		> div.bag-content {
			flex-grow: 1;

			border-top: 1px solid var(--primary);
			border-bottom: 1px solid var(--primary);
			min-height: 0px;
		}

		> div.bag-footer {
			padding: 1em;
			gap: 1em;

			display: flex;
			flex-direction: column;

			> div.total {
				display: flex;
				flex-direction: row;

				> p {
					flex-grow: 1;
					margin: 0px;
				}

				> p:last-child {
					text-align: right;
				}
			}

			> button.checkout-button {
				padding: 1em;

				color: white;
				background-color: var(--onBackground);

				border: none;
				border-radius: 1em;
				// border-width: 1px;
			}
		}
	}
</style>
