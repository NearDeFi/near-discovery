import Link from 'next/link';
import styled from 'styled-components';

import { ArrowUpRight } from '../../icons/ArrowUpRight';
import { Logotype } from '../Logotype';
import { NavigationButton } from '../NavigationButton';
import { NotificationWidget } from '../NotificationWidget';
import { SignInButton } from '../SignInButton';
import { DevActionsDropdown } from './DevActionsDropdown';
import { UserDropdown } from './UserDropdown';

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--slate-dark-1);
  z-index: 1000;
  padding: 12px 0;

  .user-section {
    margin-left: auto;
    > button {
      font-size: 14px;
    }
  }

  .container {
    display: flex;
    align-items: center;

    .navigation-section {
      margin-left: 50px;
      display: flex;

      > div {
        > a {
          margin-right: 20px;
        }
      }
    }

    .user-section {
      display: flex;
      align-items: center;

      .nav-create-btn {
        margin-left: 10px;
      }
    }

    .arrow-up-right {
      margin-left: 4px;
    }
  }
`;

export function DesktopNavigation(props) {
  return (
    <StyledNavigation>
      <div className="container">
        <Link href="/" className="logo-link">
          <Logotype />
        </Link>
        <div className="navigation-section">
          <NavigationButton route="/">Home</NavigationButton>
          <NavigationButton route="/edit">Create</NavigationButton>
          <NavigationButton href="https://thewiki.near.page/near.social_docs">
            Documentation
            <ArrowUpRight />
          </NavigationButton>
        </div>
        <div className="user-section">
          {!props.signedIn && <SignInButton onSignIn={() => props.requestSignIn()} />}
          {props.signedIn && (
            <>
              <DevActionsDropdown {...props} />
              <NotificationWidget notificationButtonSrc={props.widgets.notificationButton} />
              <UserDropdown {...props} />
            </>
          )}
        </div>
      </div>
    </StyledNavigation>
  );
}
