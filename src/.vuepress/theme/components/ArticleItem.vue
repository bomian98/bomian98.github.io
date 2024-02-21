<script setup lang="ts">
import { toRef } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import { ArticleInfoType, PageType } from "vuepress-theme-hope/client/index";
import PageInfo from "@theme-hope/modules/info/components/PageInfo";
import { LockIcon } from "@theme-hope/modules/encrypt/components/icons";
import { StickyIcon } from "@theme-hope/modules/blog/components/icons/index";
import { useArticleInfo } from "@theme-hope/modules/blog/composables/index";

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

// Use defineSlots to explicitly define slots for better type inference
const slots = defineSlots();

// Use 'toRef' to create a ref from a reactive object's property
const { info: pageInfo, items } = useArticleInfo(props);
const articleInfo = toRef(props, "info");

const {
  [ArticleInfoType.title]: title,
  [ArticleInfoType.type]: type,
  [ArticleInfoType.isEncrypted]: isEncrypted = false,
  [ArticleInfoType.cover]: cover,
  [ArticleInfoType.excerpt]: excerpt,
  [ArticleInfoType.sticky]: sticky,
} = articleInfo.value;
</script>

<template>
  <div class="vp-article-wrapper">
    <article
      class="vp-article-item"
      vocab="https://schema.org/"
      typeof="Article"
    >
      <!-- Render cover slot or the cover image -->
      <template v-if="slots.cover || cover">
        <div class="vp-article-item-cover">
          <div class="vp-article-cover">
            <template v-if="slots.cover">
              <slot name="cover" :cover="cover"></slot>
            </template>
            <template v-else-if="cover">
              <img class="lazy" :src="withBase(cover)" loading="lazy" />
              <meta property="image" :content="withBase(cover)" />
            </template>
          </div>
        </div>
      </template>

      <!-- If the article is sticky, display the StickyIcon -->
      <StickyIcon v-if="sticky" />

      <!-- Render title slot or the default title structure -->
      <div class="vp-article-item-uncover">
        <RouteLink :to="props.path">
          <template v-if="slots.title">
            <slot
              name="title"
              :title="title"
              :isEncrypted="isEncrypted"
              :type="type"
            ></slot>
          </template>
          <template v-else>
            <header class="vp-article-title">
              <LockIcon v-if="isEncrypted" />
              <!-- <SlideIcon v-if="type === PageType.slide" /> -->
              <span property="headline">{{ title }}</span>
            </header>
          </template>
        </RouteLink>

        <!-- Render excerpt slot or the default excerpt -->
        <template v-if="slots.excerpt">
          <slot name="excerpt" :excerpt="excerpt"></slot>
        </template>
        <template v-else-if="excerpt">
          <div class="vp-article-excerpt" v-html="excerpt"></div>
        </template>

        <hr class="vp-article-hr" />

        <!-- Render info slot or the PageInfo component -->
        <template v-if="slots.info">
          <slot name="info" :info="pageInfo"></slot>
        </template>
        <template v-else>
          <PageInfo :info="pageInfo" :items="items" />
        </template>
      </div>
    </article>
  </div>
</template>
