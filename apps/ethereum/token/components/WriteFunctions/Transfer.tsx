
import { useState } from 'react';
import { styled } from '../../stitches.config';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useToken } from '../../source/useToken';
import { Box, Item, TriggerContainer, Trigger, Parameters, Input, Content, Button} from './WriteComponents'
 

const Transfer = () => {
  const { address } = useEthereum();
  const { Transfer } = useToken();
  const { mutate } = Transfer();
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState(0);


  const createNewInstance = async () => {
    try {
      const instanceData = {
        account: address,
        to:receiver,
        value:amount,
      }

      mutate(instanceData);
    } catch (error) {
      throw error;
    }
  }


  return (
    <Box>
      <h4>Transfer Tokens</h4>
      <p>Transfer Tokens to someone</p>
      <Accordion.Root type="single" collapsible>
      <Item value='item-1'>
        <TriggerContainer>
          <Trigger>
             Transfer Tokens
          </Trigger>
        </TriggerContainer>
        <Parameters>
        <Content>
          <Input disabled={!address} placeholder='Receiver' onChange={(e) => setReceiver(e.target.value)} />
          <Input disabled={!address} type="number" min="0" placeholder='Amount to transfer' onChange={(e) => setAmount(e.currentTarget.valueAsNumber)} />
          <Button disabled={!address} onClick={createNewInstance}>{!address ? 'Connet Wallet' : 'Transfer'}</Button>
        </Content>
        </Parameters>
      </Item>
    </Accordion.Root>
    </Box>
    
  )
}

export default Transfer;

