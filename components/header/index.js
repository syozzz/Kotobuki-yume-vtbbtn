import styled from 'styled-components'
import { withTranslation } from '../../i18n'


const TopBox = styled.div`
  height: 60px;
  max-width: 1000px;
  user-select: none;
  padding: 0px 16pt;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  .social-box {
    
  }
`;

const Header = ({ t }) => {

    return (
        <>
            <TopBox>
                <div className="social-box">
                    {t('title')}
                </div>
            </TopBox>
        </>
    );

};

export default withTranslation('header')(Header);