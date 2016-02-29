import React, { Component } from 'react';
var template = require('./template.html');

export default class Root extends Component {
	createMarkup() {
		return {
			__html: template
		};
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.createMarkup()} />
		)
	}
}
