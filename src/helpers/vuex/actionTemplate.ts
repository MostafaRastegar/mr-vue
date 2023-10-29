import { Commit } from "vuex";

interface ActionTemplateProps {
  commit: Commit;
  type: string;
  service: (body?: any) => Promise<any>;
  resolve?: (data?: any) => any;
  reject?: (error?: any) => any;
}

/**
 * Executes an vuex action template asynchronously.
 *
 * @param {ActionTemplateProps} props - The properties object for the action template.
 * @param {Function} props.commit - The commit function for Vuex.
 * @param {string} props.type - The type of the action.
 * @param {Function} props.service - The service function to be executed.
 * @param {Function} [props.resolve = (data: any) => data] - The resolve function for a successful response.
 * @param {Function} [props.reject = (error: any) => error] - The reject function for an unsuccessful response.
 * @returns {Promise<any>} A promise that resolves with the data returned by the service function or rejects with an error.
 */
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
    } else {
      throw new Error("Request failed with status code " + status);
    }
  } catch (error) {
    reject(error);
    commit(`${type}_FAILURE`, error);
  }
};

export default actionTemplate;
