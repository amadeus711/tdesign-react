import React, { useState } from 'react';
import { TagInput, Tag } from 'tdesign-react';

export default function CustomTagExample() {
  const [tags, setTags] = useState(['StudentA', 'StudentB', 'StudentC']);
  const onTagDelete = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };
  return (
    <div className="tdesign-demo-block-column" style={{ width: '80%' }}>
      {/* 方式一：使用 tag 定义标签内部内容  */}
      <TagInput
        value={tags}
        onChange={setTags}
        clearable
        minCollapsedNum={2}
        tag={({ value }) => <span>
          <img
            src='https://tdesign.gtimg.com/site/avatar.jpg'
            style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
          />
          {value}
        </span>}
      ></TagInput>

      <br /><br />

      {/* 方式二：使用 valueDisplay 定义全部内容 */}
      <TagInput
        value={tags}
        onChange={setTags}
        valueDisplay={({ value }) => value.map((item, index) => (
          <Tag
            key={item}
            closable
            style={{ marginRight: '4px' }}
            onClose={() => onTagDelete(index)}
          >
            <div>
              <img
                src="https://tdesign.gtimg.com/site/avatar.jpg"
                style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
              />
              { item }
            </div>
          </Tag>
        ))}
        clearable
      ></TagInput>
    </div>
  );
}
