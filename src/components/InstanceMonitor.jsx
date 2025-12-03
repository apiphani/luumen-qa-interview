import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Alert, Button, Card, Spin, Tag } from 'antd';
import { ReloadOutlined, WarningOutlined } from '@ant-design/icons';
import { GET_INSTANCE, ACKNOWLEDGE_ALERT } from '../graphql/queries';

/**
 * InstanceMonitor Component
 *
 * NOTE: The full implementation will be provided at interview time.
 * This is a placeholder file.
 *
 * Component functionality:
 * - Fetches instance data via GraphQL (polls every 30 seconds)
 * - Displays instance name, health status, and metrics
 * - Shows active alerts with acknowledge functionality
 * - Provides manual refresh capability
 */

const InstanceMonitor = ({ instanceId, onRefresh }) => {
  // Implementation will be provided at interview time
  return (
    <Card title="InstanceMonitor Placeholder">
      <p>The full component implementation will be provided at interview time.</p>
      <p>Instance ID: {instanceId}</p>
    </Card>
  );
};

export default InstanceMonitor;
