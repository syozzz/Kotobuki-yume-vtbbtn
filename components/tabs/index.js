import styled from 'styled-components'
import { withTranslation } from '../../i18n'
import { Tabs } from 'antd'
import Router, { withRouter } from 'next/router'

const { TabPane } = Tabs

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
    
    .ant-tabs-top>.ant-tabs-nav:before {
      border-bottom: none;
    }
    
    .ant-tabs-top>.ant-tabs-nav {
      margin: 0;  
    }
  }
`;

const MyTabs = ({ t, router }) => (
    <Nav>
        <div className="nav-container">
            <Tabs defaultActiveKey={router.pathname}  onChange={(val) => {
                Router.push(val)
            }}>
                <TabPane tab={t('home')} key="/"/>
                {/*<TabPane tab={t('comment')} key="/comment"/>
                <TabPane tab={t('gallery')} key="/gallery"/>*/}
                <TabPane tab={t('about')} key="/about"/>
            </Tabs>
        </div>
    </Nav>
)

export default withRouter(withTranslation('header')(MyTabs))
