import Row from '@element/row';
import Col from '@element/col';

const components = [
  Row,
  Col,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 默认全部导出
export default {
  install,
  Row,
  Col,
};

// 按需导出
export {
  install,
  Row,
  Col,
};
