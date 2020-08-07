import styled from 'styled-components'
import { withTranslation } from '../../i18n'
import { Tabs } from '@zeit-ui/react'
import Router, { withRouter } from 'next/router'

const Nav = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;

  
  &:before {
    position: absolute;
    content: "";
    height: 1px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgb(234, 234, 234);
  }
  
  .nav-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 5px;
  
    .tabs {
      width: 100%;
      
      header .tab {
        font-size: 0.875rem;
        
        &:after {
          bottom: -8px;
        }
      }
      
      .content {
        padding-top: 0 !important;
      }
    }
  }
`;

const MyTabs = ({ t, router }) => (
    <Nav>
        <div className="nav-container">
            <Tabs initialValue={router.pathname} hideDivider onChange={(val) => {
                Router.push(val)
            }}>
                <Tabs.Item label={t('home')} value="/"/>
                <Tabs.Item label={t('comment')} value="/comment"/>
                <Tabs.Item label={t('gallery')} value="/gallery"/>
                <Tabs.Item label={t('about')} value="/about"/>
            </Tabs>
        </div>
    </Nav>
)

export default withRouter(withTranslation('header')(MyTabs))
