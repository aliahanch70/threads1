<script setup lang="ts">
  import {useUserStore} from "~/stores/user";

  import {useSupabaseClient} from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient";
  import {useSupabaseUser} from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser";
  const userStore = useUserStore()

  const runtimeConfig = useRuntimeConfig()
  let isMenu = ref(false)
  let isLike = ref(false)
  let isDeleting = ref(false)

  const emit = defineEmits(['isDeleted'])
  const props = defineProps({post:Object})

  // const  client = useSupabaseClient()
  // const user = useSupabaseUser()
</script>

<template>
  <div class="z-50 bottom-0 h-full justify-between">
    <div class=" py-2 w-full">
      <div class="flex items-center justify-between">

        <div class="flex items-center text-white">
          <img class="rounded-full h-[35px] " :src="post.image" alt="sa">
          <div class="ml-2 font-semibold text-[16px]">{{post.name}}</div>
        </div>

        <div @click="isMenu=! isMenu " class="relative">
          <button
            :disabled="isDeleting"
            class="flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-full cursor-pointer"
            :class="isMenu? 'bg-gray-800' : '' "
          >
            <Icon v-if="!isDeleting " name="bi:three-dots" color="#ffffff" size="18" />
            <Icon v-else name="eos-icons:bubble-loading" color="#ffffff" size="18"/>
          </button>

          <div v-if="isMenu" class="absolute border border-gray-500 right-0 z-20 mt-1 rounded ">
            <button class="flex items-center rounded gap-2 text-red-500 justify-between bg-black w-full pl-4 pr-3 py-1 hover:bg-gray-900">

                Delete

              <Icon name="solar:trash-bin-trash-broken" size="20"/>
            </button>
          </div>
        </div>

      </div>

      <div class="relative flex items-center w-full">
        <div class="w-[42px] mx-auto">
          <div class="absolute ml-4 mt-1 top-0 w-[1px] bg-gray-700 h-full"/>
        </div>
        <div class="bg-black rounded-lg w-[calc(100%-50px)] text-sm font-light">
          <div class="py-2 text-gray-300">{{post.text}}</div>
          <img alt="post" v-if="post && post.picture" class="mx-auto w-full mt-2 pr-2 rounded" :src="post.picture">

          <div>
            <button
              :disabled="isLike"
              class="flex items-center gap-1"
            >
                <Icon
                    class="p-1 text-white hover:bg-gray-800 rounded-full cursor-pointer"
                    name="mdi:cards-heart-outline"
                    size="28"
                />
            </button>
            <div class="relative text-sm text-gray-500">
              <span>
                4
              </span>
              likes
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

