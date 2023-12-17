import React, { useEffect, useState, useContext } from 'react'
import { Hero, Card, PopUp } from "../Components"
import { CrowdFundingContext } from '@/Context/CrowdFunding'

const index=()=> {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();
  
  useEffect(()=> {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
      title="All listed Campaigns"
      allcampaign={allcampaign}
      setOpenModel={setOpenModel}
      setDonateCampaign={setDonateCampaign}
      />

<Card
      title="Your created Campaigns"
      allcampaign={usercampaign}
      setOpenModel={setOpenModel}
      setDonateCampaign={setDonateCampaign}
      />

      {openModel && (
        <PopUp
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}
        />
      )}

    </>
  );
};

export default index