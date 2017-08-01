/*
    ./app/components/tooltip.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function LinkWithTooltip(props) {
  const tooltip = <Tooltip id={props.id}>{props.tooltip}</Tooltip>;

  return (
    <OverlayTrigger
      overlay={tooltip}
      placement={props.placement}
      delayShow={300}
      delayHide={150}
    >
      <a href={props.href}>{props.children}</a>
    </OverlayTrigger>
  );
}

LinkWithTooltip.propTypes = {
  id: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: React.PropTypes.node.isRequired,
  placement: PropTypes.string
};
LinkWithTooltip.defaultProps = {
  href: '#',
  placement: 'right'
};
