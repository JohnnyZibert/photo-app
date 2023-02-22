declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module '*.scss';
declare module '*.module.css'
declare module 'uuid'
declare module 'styled-components'

declare module '*.svg' {
    import React from 'react';

    const SVG: React<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}