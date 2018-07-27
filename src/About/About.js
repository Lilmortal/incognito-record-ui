import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import Button from '../ui/Button';
import Content from '../Content';
import Calendar from '../Calendar';
import CountdownTimer from '../CountdownTimer';
import { createBem } from '../util/bem';

import messages from './About.messages';
import './About.scss';

const bem = createBem('incognito-About');

const About = ({
  id,
  intersectedContents,
  deadlineContentsDate,
  deadlineContentsButtonSelectedId,
  onPushContentRefs,
  onDeadlineContentsButtonClick
}) => (
  <div className={bem()}>
    <Content
      id={0}
      title={<FormattedMessage {...messages.aboutMeTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[0]}
    >
      <FormattedMessage
        {...messages.aboutMeContent}
        values={{
          link: (
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Lilmortal/incognito-record-ui">
              https://github.com/Lilmortal/incognito-record-ui
            </a>
          )
        }}
      />
    </Content>

    <Content
      id={`${id}__whyAmIDoingThis`}
      title={<FormattedMessage {...messages.whyAmIDoingThisTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[`${id}__whyAmIDoingThis`]}
    >
      <FormattedMessage {...messages.whyAmIDoingThisContent} />
    </Content>

    <Content
      id={2}
      title={<FormattedMessage {...messages.whatAmITryingToAchieveTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[2]}
    >
      <FormattedMessage {...messages.whatAmITryingToAchieveContent} />
    </Content>

    <Content
      id={3}
      title={<FormattedMessage {...messages.howAmIGoingToAchieveThisTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[3]}
    >
      <FormattedMessage {...messages.howAmIGoingToAchieveThisContent} />
    </Content>

    <Content
      id={4}
      title={<FormattedMessage {...messages.whatIsMyDeadlineTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[4]}
    >
      <div className={bem('deadlineContents')}>
        <Calendar date={deadlineContentsDate} className={bem('calendarDeadlines')} />
        <div className={bem('buttons')}>
          <Button
            className={bem('button')}
            isSelected={deadlineContentsButtonSelectedId === 0}
            onClick={() => onDeadlineContentsButtonClick(0, moment('14/07/2018', 'DD/MM/YYYY'))}
          >
            <FormattedMessage {...messages.frontEndButtonText} />
          </Button>
          <Button
            className={bem('button')}
            isSelected={deadlineContentsButtonSelectedId === 1}
            onClick={() => onDeadlineContentsButtonClick(1, moment('22/07/2018', 'DD/MM/YYYY'))}
          >
            <FormattedMessage {...messages.backEndButtonText} />
          </Button>
          <Button
            className={bem('button')}
            isSelected={deadlineContentsButtonSelectedId === 2}
            onClick={() => onDeadlineContentsButtonClick(2, moment('5/08/2018', 'DD/MM/YYYY'))}
          >
            <FormattedMessage {...messages.devOpsButtonText} />
          </Button>
          <Button
            className={bem('button')}
            isSelected={deadlineContentsButtonSelectedId === 3}
            onClick={() => onDeadlineContentsButtonClick(3, moment('5/09/2018', 'DD/MM/YYYY'))}
          >
            <FormattedMessage {...messages.algorithmsButtonText} />
          </Button>
        </div>
      </div>
    </Content>

    <Content
      id={5}
      title={<FormattedMessage {...messages.finalCountdownTitle} />}
      onRefObserve={onPushContentRefs}
      isIntersecting={intersectedContents[5]}
    >
      <CountdownTimer deadlineDateTime={Date.parse('2018-12-31T00:00:00')} />
    </Content>
  </div>
);

export default About;
