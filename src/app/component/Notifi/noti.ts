import { notification } from "antd";

interface propsNoti {
  type: "success" | "error" | "warning";
  message: string;
  description?: string;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export const openNotification = (props: propsNoti) => {
  notification[props.type]({
    message: props.message,
    description: props.description,
    placement: props.placement,
  });
};
