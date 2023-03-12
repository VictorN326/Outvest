import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import {outvestLogo, outvestFull} from 'assets';
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={outvestLogo} alt="Outvest" style={{marginTop: '15px'}} width="60px" height="55" />
        ) : (
          <img src={outvestFull} alt="Refine" width="140px" height="50px" />
        )}
      </Link>
    </Button>
  );
};
