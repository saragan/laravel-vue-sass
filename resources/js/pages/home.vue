<template>
    <div class="main">
        <div class="main-body">
            Welcome To Clean!
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Home',
        components: {
        }
	};
</script>

<style lang="scss" scoped>
	.main {
        @include flex_grow(1);
        @include flex_box();
        @include flex_direction(column);

        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color: $white;
    	font-family: Montserrat;

        @include flex_justify(center);
        @include flex_align(center);

        .main-body {
            @include flex_box();
            @include flex_direction(column);
            overflow-y: auto;
        }
	}
</style>