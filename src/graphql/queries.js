import { gql } from '@apollo/client';

export const GET_INSTANCE = gql`
  query GetInstance($id: ID!) {
    instance(id: $id) {
      id
      name
      status
      health
      lastChecked
      metrics {
        cpu
        memory
        disk
      }
      alerts {
        id
        severity
        message
        timestamp
      }
    }
  }
`;

export const ACKNOWLEDGE_ALERT = gql`
  mutation AcknowledgeAlert($alertId: ID!) {
    acknowledgeAlert(alertId: $alertId) {
      id
      acknowledged
    }
  }
`;
