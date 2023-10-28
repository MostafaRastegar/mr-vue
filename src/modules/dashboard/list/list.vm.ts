import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { articleActions } from "@/app/articles/actions";
import dayjs from "dayjs";
import router from "@/router";
import { onBeforeRouteUpdate } from "vue-router";

const listVM = () => {
  const store = useStore();

  const articlesLoading = computed(() => {
    return store.getters.getArticleListResponse?.loading;
  });
  const deleteLoading = computed(() => {
    return store.getters.deleteArticlesSlugRequest?.loading;
  });
  const data = computed(() => {
    return store.getters.getArticleListResponse?.data;
  });

  const getArticlesRequest = async (page: string) => {
    await store.dispatch(articleActions.getArticlesRequest, page);
  };
  const deleteArticlesSlugRequest = async (slug: string) => {
    await store.dispatch(articleActions.deleteArticlesSlugRequest, slug);
  };

  const page = ref(router.currentRoute.value.params.page as string);
  const articlesCount = ref(0);

  watch(data, (data) => {
    if (data?.articlesCount) {
      articlesCount.value = data?.articlesCount;
    }
  });

  onMounted(() => {
    getArticlesRequest(page.value);
  });

  onBeforeRouteUpdate(() => {
    const updatedPage = router.currentRoute.value.params.page as string;
    if (page.value !== updatedPage) {
      page.value = updatedPage;
      getArticlesRequest(updatedPage);
    }
  });

  const columns = ref(["title", "author", "tags", "excerpt", "created"]);

  return {
    store,
    articlesLoading,
    deleteLoading,
    data,
    columns,
    dayjs,
    page: parseInt(page.value, 10),
    articlesCount,
    getArticlesRequest,
    deleteArticlesSlugRequest,
  };
};

export default listVM;
