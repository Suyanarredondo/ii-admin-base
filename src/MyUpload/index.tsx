import React, { CSSProperties } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

const { Dragger } = Upload;

import './index.less';

interface MyUpload {
  /** multiple 是否支持多个上传 */
  multiple?: boolean;
  /** describe 描述文案 */
  describe?: string | string[];
  /** extra 额外描述文案 */
  extra?: string | string[];
  /** onChange 回调方法 */
  onChange?: (params: any) => void;
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法 */
  beforeUpload?: (params: any) => any;
  style?: CSSProperties;
  /** iconFontSize 上传图标大小 */
  iconFontSize?: number;
}

const beforeUpload = () => {
  return false;
};

export default function MyUpload(props: MyUpload) {
  const {
    multiple = true,
    iconFontSize = 28,
    describe,
    extra,
    ...restProps
  } = props;

  if (!restProps.beforeUpload) {
    restProps.beforeUpload = beforeUpload;
  }

  return (
    <Dragger multiple={multiple} {...restProps}>
      <p className="myupload-iconpart">
        <UploadOutlined
          style={{ fontSize: `${iconFontSize}px`, color: '#3079FF' }}
        />
      </p>
      <p className="myupload-describe">
        {describe instanceof Array
          ? describe.map(item => <div key={item}>{item}</div>)
          : describe}
      </p>
      <p className="myupload-extra">
        {extra instanceof Array
          ? extra.map(item => <div key={item}>{item}</div>)
          : extra}
      </p>
    </Dragger>
  );
}
