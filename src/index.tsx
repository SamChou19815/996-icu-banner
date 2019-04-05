import React, { CSSProperties, Component } from 'react';

type Languages = 'en_US' | 'zh-Hans';

type I18nString = { readonly [lang in Languages]: string };

const messages: I18nString = {
  en_US: 'I support the cause of 996.icu.',
  'zh-Hans': '我支持 996.icu。'
};

const defaultBannerStyles: CSSProperties = {
  position: 'fixed',
  display: 'flex',
  flexFlow: 'row',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  padding: '1em',
  left: '0',
  right: '0',
  backgroundColor: 'white'
};

const defaultTextStyles: CSSProperties = {
  margin: '0 1em'
};

interface Props {
  readonly bannerPosition: 'top' | 'bottom';
  readonly lang: Languages;
  readonly className: string | undefined;
  readonly styles: CSSProperties | undefined;
}

type State = { closed: boolean };

export default class Banner extends Component<Props, State> {
  static defaultProps = {
    bannerPosition: 'top',
    lang: 'en_US',
    className: undefined,
    styles: undefined
  };

  state = { closed: Boolean(localStorage.getItem('996-icu-banner-closed') || false) };

  private close = () =>
    this.setState({ closed: true }, () => localStorage.setItem('996-icu-banner-closed', 'true'));

  render() {
    const { closed } = this.state;
    if (closed) {
      return null;
    }
    const { bannerPosition, lang, className, styles } = this.props;
    const positionStyle: CSSProperties = {
      ...defaultBannerStyles,
      ...styles,
      [bannerPosition]: '0'
    };
    return (
      <div id="banner-996-icu" className={className} style={positionStyle}>
        <span id="message-996-icu">{messages[lang]}</span>
        <a
          id="website-link-996-icu"
          href="https://996.icu/"
          target="_blank"
          rel="noopener noreferrer"
          style={defaultTextStyles}
        >
          <img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" />
        </a>
        <a
          id="github-link-996-icu"
          href="https://github.com/996icu/996.icu"
          target="_blank"
          rel="noopener noreferrer"
          style={defaultTextStyles}
        >
          <img src="https://img.shields.io/badge/link-996.icu%20GitHub-blue.svg" alt="996.icu" />
        </a>
        <a id="dismiss-button-996-icu" href="#" onClick={this.close} style={defaultTextStyles}>
          Dismiss
        </a>
      </div>
    );
  }
}
