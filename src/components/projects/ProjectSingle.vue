<script>
export default {
	props: ['project'],
	methods:{
		redirectToGithubProfile(username){
			window.open(`https://github.com/${username}`, '_blank');
		}
	}
};
</script>

<template>
	<div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title"
				class="rounded-t-xl border-none object-cover  sm:h-40 w-full" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold ">
				{{ project.title }}
			</p>
			<span class="font-general-small text-sm text-ternary-dark light:text-ternary-light">Team - {{ project.team
			}}</span>
			<br>
			<span class="font-general-small text-sm text-ternary-dark light:text-ternary-light">{{ project.description
			}}</span>
			<br>
			<div class="flex items-center justify-center">
				<div class="flex-inline items-center gap-3">
					<a v-for="(member, index) in project.members" :key="index" aria-label="Share Project"
						class="light:bg-ternary-light text-light-400 hover:text-primary-light light:hover:text-primary-light p-2 rounded-lg  duration-500 inline-flex items-center">
						<i data-feather="user"  class="w-4 h-4 text-ternary-dark light:text-ternary-light"></i>
						<span title="View github profile" class="ml-1 cursor-pointer text-ternary-dark"
							style="font-size: xx-small" @click="redirectToGithubProfile(member)">{{
								member
							}}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
