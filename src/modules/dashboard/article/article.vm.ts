import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { articleActions } from "@/app/articles/actions";
import router from "@/router";

const articleVM = () => {
  const store = useStore();

  const articleLoading = computed(() => {
    return store.getters.getArticleResponse?.loading;
  });
  const articleData = computed(() => {
    return store.getters.getArticleResponse?.data;
  });
  const tagsData = computed(() => {
    return store.getters.getTagsResponse?.data;
  });
  const tagsLoading = computed(() => {
    return store.getters.getArticleResponse?.loading;
  });

  const getArticlesSlugRequest = async (slug: string) => {
    await store.dispatch(articleActions.getArticlesSlugRequest, slug);
  };

  onMounted(() => {
    getArticlesSlugRequest(router.currentRoute.value.params.slug as string);
  });

  const title = ref("");
  const body = ref("");
  const description = ref("");
  const tagList = ref([]);

  watch(tagsData, () => {
    const articleValue = articleData.value?.article;
    title.value = articleValue?.title;
    body.value = articleValue?.body;
    description.value = articleValue?.description;
    tagList.value = articleValue?.tagList.map((tag: string) => ({
      name: tag,
      checked: true,
    }));
    // if (tagsData.value?.tags) {
    //   const mergedTags = tagsData.value?.tags.map((tag: string) => ({
    //     name: tag,
    //     checked: articleData.value?.article?.tagList?.includes(tag),
    //   }));
    //   console.log("mergedTags :>> ", mergedTags);
    //   console.log("articleData :>> ", articleData.value.article?.tagList);
    // }
  });

  return {
    store,
    articleLoading,
    articleData,
    title,
    body,
    description,
    tagList,
    loading: tagsLoading,
  };
};

export default articleVM;
