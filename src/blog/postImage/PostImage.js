import React from 'react';

import createBem from '../../util/createBem';
import './PostImage.scss';

const bem = createBem('incognito-PostImage');

const PostImage = () => <div className={bem()} />;

export default PostImage;
