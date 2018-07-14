import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import Button from '../../ui/Button';
import Content from '../../Content';
import Calendar from '../../Calendar';
import { createBem } from '../../util/bem';

import messages from './About.messages';
import './About.scss';

const bem = createBem('incognito-About');

export default class About extends React.Component {
  state = {
    loaded: false,
    contents: [],
    date: moment('24/07/2018', 'DD/MM/YYYY')
  };

  componentWillMount() {
    this.onIntersectionObserve(entries => {
      entries.forEach(entry => {
        const { isIntersecting, intersectionRatio } = entry;

        // intersectionRatio is needed because Edge does not support isIntersecting
        if (isIntersecting || intersectionRatio > 0) {
          this.setState({
            contents: { ...this.state.contents, [entry.target.id]: true }
          });
        }
      });
    });

    this.loadedTimer = setTimeout(() => this.setState({ loaded: true }), 0);
  }

  componentWillUnmount() {
    this.observer.disconnect();
    this.observer = null;
    clearTimeout(this.loadedTimer);
  }

  onIntersectionObserve = cb => {
    this.observer = new window.IntersectionObserver(cb);
  };

  onPushContentRefs = ref =>
    this.observer !== undefined && this.observer !== null && ref !== undefined && this.observer.observe(ref);

  onUpdateDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div className={bem()}>
        <Content
          id={0}
          title={<FormattedMessage {...messages.aboutMeTitle} />}
          onRefObserve={this.onPushContentRefs}
          isIntersecting={this.state.contents[0]}
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
          id={1}
          title={<FormattedMessage {...messages.whyAmIDoingThisTitle} />}
          onRefObserve={this.onPushContentRefs}
          isIntersecting={this.state.contents[1]}
        >
          <FormattedMessage {...messages.whyAmIDoingThisContent} />
        </Content>

        <Content
          id={2}
          title={<FormattedMessage {...messages.whatAmITryingToAchieveTitle} />}
          onRefObserve={this.onPushContentRefs}
          isIntersecting={this.state.contents[2]}
        >
          <FormattedMessage {...messages.whatAmITryingToAchieveContent} />
        </Content>

        <Content
          id={3}
          title={<FormattedMessage {...messages.howAmIGoingToAchieveThisTitle} />}
          onRefObserve={this.onPushContentRefs}
          isIntersecting={this.state.contents[3]}
        >
          <FormattedMessage {...messages.howAmIGoingToAchieveThisContent} />
        </Content>

        <Content
          id={4}
          title={<FormattedMessage {...messages.whatIsMyDeadlineTitle} />}
          onRefObserve={this.onPushContentRefs}
          isIntersecting={this.state.contents[4]}
        >
          <div className={bem('deadlineContents')}>
            <Calendar date={this.state.date} loaded={this.state.loaded} className={bem('calendarDeadlines')} />
            <div className={bem('buttons')}>
              <Button className={bem('button')} onClick={() => this.onUpdateDate(moment('24/07/2018', 'DD/MM/YYYY'))}>
                <FormattedMessage {...messages.frontEndButtonText} />
              </Button>
              <Button className={bem('button')} onClick={() => this.onUpdateDate(moment('12/02/2018', 'DD/MM/YYYY'))}>
                <FormattedMessage {...messages.backEndButtonText} />
              </Button>
              <Button className={bem('button')} onClick={() => this.onUpdateDate(moment('02/12/2019', 'DD/MM/YYYY'))}>
                <FormattedMessage {...messages.devOpsButtonText} />
              </Button>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}
