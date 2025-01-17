import React, { useState } from 'react';
import { NotificationPlugin, Button, Input } from 'tdesign-react';

export default function NotificationExample() {
  const [offsetY, setOffsetY] = useState('');
  const [offsetX, setOffsetX] = useState('');

  const openNotification = (placement) => {
    NotificationPlugin.info({
      title: '标题名称',
      content: '这是一条可以自动关闭的消息通知',
      placement,
      duration: 3000,
      offset: [offsetX, offsetY],
    });
  };

  return (
    <div className="tdesign-demo-block-column">
      <div className="tdesign-demo-block-row">
        <Input
          placeholder="请输入横向偏移量"
          value={offsetX}
          onChange={(v) => setOffsetX(v)}
          style={{ width: '130px', display: 'inline-block', margin: '0 20px 36px 0' }}
        ></Input>
        <Input
          placeholder="请输入纵向偏移量"
          value={offsetY}
          onChange={(v) => setOffsetY(v)}
          style={{ width: '130px', display: 'inline-block', margin: '0 20px 36px 0' }}
        ></Input>
      </div>
      <div className="tdesign-demo-block-row">
        <Button onClick={() => openNotification('top-left')}>左上角</Button>
        <Button onClick={() => openNotification('top-right')}>右上角</Button>
      </div>
      <div className="tdesign-demo-block-row">
        <Button onClick={() => openNotification('bottom-left')}>左下角</Button>
        <Button onClick={() => openNotification('bottom-right')}>右下角</Button>
      </div>
    </div>
  );
}
