import React from 'react';

type CveCardProps = {
  id: string;
  description: string;
  severity: string;
  published: string;
  source: string;
  isLoading?: boolean;
  kev?: boolean;
};

const severityColors: Record<string, string> = {
  CRITICAL: 'bg-red-600',
  HIGH: 'bg-orange-500',
  MEDIUM: 'bg-yellow-400',
  LOW: 'bg-green-500',
  UNKNOWN: 'bg-gray-400',
};

const severityIcons: Record<string, string> = {
  CRITICAL: '🛑',
  HIGH: '⚠️',
  MEDIUM: '🔶',
  LOW: '✅',
  UNKNOWN: '❔',
};

const sourceStyles: Record<string, string> = {
  NVD: 'bg-blue-500 text-white',
  CIRCL: 'bg-purple-500 text-white',
  CNNVD: 'bg-red-500 text-white',
  JVN: 'bg-red-700 text-white',
  EXPLOITDB: 'bg-red-600 text-white',
  CVEORG: 'bg-black text-white',
  ARCHIVE: 'bg-gray-600 text-white',
  UNKNOWN: 'bg-gray-400 text-white',
};

export default function CveCard({ id, description, severity, published, source, isLoading, kev }: CveCardProps) {
  const isValidDate = published && !isNaN(Date.parse(published));
  const formattedDate = isValidDate
    ? new Date(published).toLocaleDateString('en-AU', { year: 'numeric', month: 'short' })
    : 'Unknown';

  const sourceLabel = source?.toUpperCase() || 'UNKNOWN';
  const sourceClass = sourceStyles[sourceLabel.replace('.', '')] || sourceStyles.UNKNOWN;

  const sourceEmoji: Record<string, string> = {
    NVD: '📘',
    CIRCL: '🧠',
    JVN: '🇯🇵',
    EXPLOITDB: '💣',
    'CVE.ORG': '🗂️',
    ARCHIVE: '🗃️',
  };
  const sourceTitles: Record<string, string> = {
    NVD: 'NVD source',
    CIRCL: 'CIRCL source',
    JVN: 'Japanese advisory source',
    EXPLOITDB: 'ExploitDB source',
    'CVE.ORG': 'CVE.org release',
    ARCHIVE: 'Archived CVE data',
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white mb-4 transition-transform hover:scale-[1.02]">
      {isLoading ? (
        <div className="animate-pulse text-sm text-gray-500">Loading CVE details…</div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {id}
              {kev && (
                <span title="Known Exploited Vulnerability" className="text-xs px-2 py-1 rounded bg-black text-white">
                  🚨 KEV
                </span>
              )}
              <span title={sourceTitles[sourceLabel] || sourceLabel} className={`text-xs px-2 py-1 rounded ${sourceClass}`}>
                {sourceEmoji[sourceLabel] || '🔹'} {sourceLabel}
              </span>
            </h2>
            <span className={`text-xs text-white px-2 py-1 rounded ${severityColors[severity] || severityColors.UNKNOWN}`}>
              {severityIcons[severity] || severityIcons.UNKNOWN} {severity}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
          <div className="text-xs text-gray-500">Published: {formattedDate}</div>
        </>
      )}
    </div>
  );
}
