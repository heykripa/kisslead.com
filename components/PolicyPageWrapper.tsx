
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { POLICIES } from '../lib/policies';
import PolicyPage from './PolicyPage';

const PolicyPageWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? POLICIES[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!policy) {
    // If it's not a known policy, let the router handle it (will likely 404)
    if (slug && !['privacy-policy', 'terms-conditions', 'refund-cancellation', 'return-policy', 'shipping-policy'].includes(slug)) {
      return null; 
    }
    return <Navigate to="/" replace />;
  }

  return <PolicyPage policy={policy} />;
};

export default PolicyPageWrapper;
