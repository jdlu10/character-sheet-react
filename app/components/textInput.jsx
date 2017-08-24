/*
    ./app/components/TextInput.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      originalText: props.originalText,
      editText: props.originalText
    };
  }
  componentDidMount() {
    if (this.props.editing) {
      if (this.textInput.value === this.props.defaultValue) {
        this.textInput.value = '';
      }
      this.textInput.focus();
    }
  }
  handleChange(event) {
    this.setState({ editText: event.target.value });
  }
  handleSubmit() {
    const val = this.state.editText.trim();
    if (val) {
      this.setState({ editText: val, originalText: val });
      this.props.onSave(val);
    }
  }
  handleCancel() {
    this.setState({ editText: this.state.originalText });
    this.props.onCancel();
  }
  handleKeyDown(event) {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    if (event.which === ESCAPE_KEY) {
      this.handleCancel();
      this.props.onCancel();
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  render() {
    const classNames = `text-input ${this.props.cssClassNames}`;
    const textInputElement = (
      <input
        style={{ margin: '-4px' }}
        ref={(input) => { this.textInput = input; }}
        className={classNames}
        value={this.state.editText}
        onBlur={() => this.handleCancel()}
        onChange={e => this.handleChange(e)}
        onKeyDown={e => this.handleKeyDown(e)}
        maxLength={this.props.maxlength}
      />
    );
    const textAreaElement = (
      <textarea
        style={{ margin: '-4px' }}
        ref={(input) => { this.textInput = input; }}
        className={classNames}
        value={this.state.editText}
        onBlur={() => this.handleCancel()}
        onChange={e => this.handleChange(e)}
        onKeyDown={e => this.handleKeyDown(e)}
        maxLength={this.props.maxlength}
      />
    );
    const element = (this.props.inputType === 'textarea') ? textAreaElement : textInputElement;

    return element;
  }
}

TextInput.propTypes = {
  originalText: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  editing: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  cssClassNames: PropTypes.string,
  inputType: PropTypes.string,
  maxlength: PropTypes.number
};
TextInput.defaultProps = {
  defaultValue: '',
  onCancel: () => () => {},
  cssClassNames: '',
  inputType: 'button',
  maxlength: 20
};
