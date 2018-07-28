import React from 'react';

import { createBem, combineClassNames } from '../../util/bem';

import TextField from '../../ui/TextField';
import Button from '../../ui/Button';
import TextArea from '../../ui/TextArea';

import './AdminPanel.scss';

const bem = createBem('incognito-AdminPanel');

const mapCodeToMessage = {
  loginFailure: 'You have failed to login.'
};

const AdminPanel = ({ className, messageCode, onLogout }) => (
  <div className={combineClassNames(bem(), className)}>
    <div className={bem('panel')}>
      <div className={bem('heading')}>
        <h1>Admin Panel</h1>
        <Button onClick={onLogout}>Log out</Button>
      </div>
      <div className={bem('message')}>{mapCodeToMessage[messageCode]}</div>
      <div className={bem('formWrapper')}>
        <TextArea label="Add new post" />
        <Button className={bem('button')}>Add post</Button>
      </div>
      <div className={bem('formWrapper')}>
        <div className={bem('updatePostTextField')}>
          <TextField label="Enter which post ID you want updated" htmlFor="updatePost" />
        </div>
        <TextArea />
        <Button className={bem('button')}>Update post</Button>
      </div>
      <div className={bem('formWrapper')}>
        <TextField label="Delete post ID" htmlFor="deletePost" />
        <Button className={bem('button')}>Delete post</Button>
      </div>
    </div>
  </div>
);

export default AdminPanel;
