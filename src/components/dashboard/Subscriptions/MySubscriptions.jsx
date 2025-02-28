import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SubscriptionsCard } from './SubscriptionsCard';
import { baseURL } from '../../../redux/store';
import styled from 'styled-components';


export const MySubscriptions = ({userSubscriptions}) => {

  return (
    <DIV className='my-subscriptions-container'>
      {userSubscriptions && userSubscriptions.map((ele) => {
        return (
          <SubscriptionsCard key={ele.id} {...ele} />
        )
      })}
    </DIV>
  )
}

const DIV = styled.div`
  color: var(--text-paragraph);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 20px;
  /* flex-wrap: wrap; */
  transition: all 0.2s ease-in;

  .subscriptions-card:hover {
    transform: scale(1.001);
    border: 1px solid var(--primary-grey);
  }

  @media screen and (min-width: 401px) and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
