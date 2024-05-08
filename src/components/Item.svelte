<script lang="ts">
	export let name: string;
  export let price: number
</script>

<div
	class="firstMenu"
	style="background-color:#ebf4e4; margin:20px; height:430px; width:300px;border-radius:20px"
>
	<div>
		<img
			src="https://d1r3vc4fck3z1b.cloudfront.net/images/1707814197_web_variance_00DwO6iL.jpeg"
			alt=""
			srcset=""
			style="width:300px; height:250px;border-top-left-radius: 20px; border-top-right-radius:20px"
		/>
	</div>
	<div style="margin:10px;">
		<p style="font-weight:bold; font-size:20px">{name}</p>
	</div>
	<div>
		<hr style="width: 90%; border: none; border-top: 1px solid #37812e;" />
	</div>
	<div style="margin-left:20px">
		<p style="font-weight:bold; font-size:20px">P {price.toPrecision(2)}</p>
	</div>
	<div style="display:flex; justify-content:center">
		<button
			style="padding:10px 70px; border-radius:20px; cursor:pointer; background-color:#37812e; font-weight:bold; font-size:14px; color:white;transition: background-color 0.3s;"
			>Order</button
		>
	</div>
</div>

<style lang="scss">
</style>
