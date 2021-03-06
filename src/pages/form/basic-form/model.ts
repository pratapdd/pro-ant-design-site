import type { Effect } from 'umi';
import { message } from 'antd';
import { fakeSubmitForm } from './service';

export type ModelType = {
  namespace: string;
  state: {};
  effects: {
    submitRegularForm: Effect;
  };
};
const Model: ModelType = {
  namespace: 'formAndbasicForm',

  state: {},

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('ζδΊ€ζε');
    },
  },
};

export default Model;
