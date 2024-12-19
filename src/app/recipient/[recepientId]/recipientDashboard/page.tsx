import RecipientDashboard from '@/components/recipientDashboard/RecipientDashboard';
import { getRecipientData } from '@/lib/actions/recipient.actions';

import React from 'react'

const page = async ({
    params
  }: {
    params: {
        recepientId: string;
    };
  }) => {

    const { recepientId } = await params;
    const recipient = await getRecipientData(recepientId);

    //console.log(recipietn);
    
  return (
    <div>
      <RecipientDashboard recipient={recipient}/>
    </div>
  )
}

export default page
