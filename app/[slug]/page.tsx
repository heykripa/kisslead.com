
import React from 'react';
import { notFound } from 'next/navigation';
import { POLICIES } from '../../lib/policies';
import PolicyPage from '../../components/PolicyPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const policy = POLICIES[slug];

  if (!policy) {
    notFound();
  }

  return <PolicyPage policy={policy} />;
}

export async function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({
    slug,
  }));
}
