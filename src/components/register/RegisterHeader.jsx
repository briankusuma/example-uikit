import React from 'react';

export const RegisterHeader = ({ title, subtitle }) => {
  return (
    <div className="biz-register-header">
      <h1 className="biz-register-header__title">{title}</h1>
      {subtitle && <p className="biz-register-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default RegisterHeader;
