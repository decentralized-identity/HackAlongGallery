<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import AppBanner from "../components/shared/AppBanner.vue";
// import Button from '../components/reusable/Button.vue';

export default {
  name: "Home",
  components: {
    ProjectsGrid,
	AppBanner
    // Button,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <!-- <div className="banner bg-500 text-white text-center p-4">
    <img src="" alt="" srcset="">
  </div> -->
    <AppBanner />

    <!-- Projects -->
    <ProjectsGrid />

    <!-- Load more projects button -->
    <!-- <div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div> -->
  </div>
</template>

<style scoped></style>
