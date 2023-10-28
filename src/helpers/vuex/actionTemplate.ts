import { Commit } from "vuex";

interface ActionTemplateProps {
  commit: Commit;
  type: string;
  service: (body?: any) => Promise<any>;
  resolve?: (data?: any) => any;
  reject?: (error?: any) => any;
}

const actionTemplate = async ({
  commit,
  type,
  service,
  resolve = (data: any) => data,
  reject = (error: any) => error,
}: ActionTemplateProps) => {
  try {
    commit(`${type}_REQUEST`);
    const response = await service();
    const { data, status } = response;
    if (status >= 200 && status < 400) {
      commit(`${type}_SUCCESS`, data);
      resolve(data);
      return data;
    }
  } catch (error) {
    reject(error);
    commit(`${type}_FAILURE`, error);
  }
};

export default actionTemplate;
