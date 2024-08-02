import type { Meta, StoryObj } from '@storybook/react';
import type { MapProps } from '@vis.gl/react-google-maps';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function MapWithKey({ apiKey, ...props }: { apiKey: string } & MapProps) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map {...props} />
    </APIProvider>
  );
}

const meta: Meta<typeof MapWithKey> = {
  component: MapWithKey,
  args: {
    apiKey: 'INSERT YOUR API KEY (Refresh to take effect)',
  },
};

export default meta;

type Story = StoryObj<typeof MapWithKey>;

export const Default: Story = {
  args: {
    style: { width: '100vw', height: '100vh' },
    defaultCenter: { lat: 22.39, lng: 114.11 },
    defaultZoom: 3,
    gestureHandling: 'greedy',
    disableDefaultUI: true,
  },
};
