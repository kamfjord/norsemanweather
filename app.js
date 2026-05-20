'use strict';

// ── Historical reference split data ───────────────────────────────────────────
// Seven finish-time groups (~10h to ~16h) from Norseman results.
// All values are elapsed seconds from race start (05:00 local).

function _hms(s) {
  const [h, m, sec] = s.split(':').map(Number);
  return h * 3600 + m * 60 + sec;
}

const REF = [
  {
    finish: _hms('10:05:48'),
    splits: {
      'Swim finish':                _hms('0:54:36'),
      'Bike Start':                 _hms('0:56:12'),
      'Bike - Øvre Eidfjord':       _hms('1:06:06'),
      'Bike - Enter Gamlevegen':    _hms('1:16:26'),
      'Bike - Vøringfossen':        _hms('1:40:59'),
      'Bike - Garen':               _hms('1:47:47'),
      'Bike - Bjoreio':             _hms('1:59:03'),
      'Bike - Dyranut':             _hms('2:22:11'),
      'Bike - Halne':               _hms('2:37:50'),
      'Bike - Haugastøl':           _hms('3:01:32'),
      'Bike - Geilo':               _hms('3:31:29'),
      'Bike - Kikut':               _hms('3:47:15'),
      'Bike - Skurdalen':           _hms('3:56:46'),
      'Bike - Dagali':              _hms('4:15:33'),
      'Bike - Vasstulan':           _hms('4:38:16'),
      'Bike - Start Imingfjell':    _hms('4:48:43'),
      'Bike - Top Imingfjell':      _hms('5:13:35'),
      'Bike - End Imingfjell':      _hms('5:30:22'),
      'Bike - Austbygde':           _hms('5:54:11'),
      'Bike finish':                _hms('6:00:50'),
      'Run start':                  _hms('6:01:14'),
      'Run - Atraa':                _hms('6:20:05'),
      'Run - 10K':                  _hms('6:39:14'),
      'Run - Tinnsjø':              _hms('7:00:18'),
      'Run - Miland':               _hms('7:19:25'),
      'Run - Zombie Hill base':     _hms('7:42:31'),
      'Run - Zombie Hill 1st turn': _hms('7:52:29'),
      'Run - Zombie Hill 2nd turn': _hms('8:00:49'),
      'Run - Zombie Hill 3rd turn': _hms('8:10:36'),
      'Run - Zombie Hill 4th turn': _hms('8:20:15'),
      'Run - Zombie Hill 5th turn': _hms('8:23:22'),
      'Run - 32.5 km cut-off':      _hms('8:34:18'),
      'Run - Stavsro':              _hms('9:05:35'),
      'Run - 40K Mountain':         _hms('9:50:16'),
      'Finish':                     _hms('10:05:48'),
    },
  },
  {
    finish: _hms('11:04:19'),
    splits: {
      'Swim finish':                _hms('1:14:25'),
      'Bike Start':                 _hms('1:18:45'),
      'Bike - Øvre Eidfjord':       _hms('1:29:29'),
      'Bike - Enter Gamlevegen':    _hms('1:40:58'),
      'Bike - Vøringfossen':        _hms('2:09:13'),
      'Bike - Garen':               _hms('2:17:32'),
      'Bike - Bjoreio':             _hms('2:30:49'),
      'Bike - Dyranut':             _hms('2:58:57'),
      'Bike - Halne':               _hms('3:16:28'),
      'Bike - Haugastøl':           _hms('3:43:48'),
      'Bike - Geilo':               _hms('4:16:47'),
      'Bike - Kikut':               _hms('4:35:13'),
      'Bike - Skurdalen':           _hms('4:45:45'),
      'Bike - Dagali':              _hms('5:07:28'),
      'Bike - Vasstulan':           _hms('5:33:32'),
      'Bike - Start Imingfjell':    _hms('5:44:32'),
      'Bike - Top Imingfjell':      _hms('6:12:37'),
      'Bike - End Imingfjell':      _hms('6:33:12'),
      'Bike - Austbygde':           _hms('6:58:18'),
      'Bike finish':                _hms('7:05:07'),
      'Run start':                  _hms('7:05:54'),
      'Run - Atraa':                _hms('7:26:04'),
      'Run - 10K':                  _hms('7:46:26'),
      'Run - Tinnsjø':              _hms('8:08:09'),
      'Run - Miland':               _hms('8:27:43'),
      'Run - Zombie Hill base':     _hms('8:51:28'),
      'Run - Zombie Hill 1st turn': _hms('9:01:45'),
      'Run - Zombie Hill 2nd turn': _hms('9:10:29'),
      'Run - Zombie Hill 3rd turn': _hms('9:19:14'),
      'Run - Zombie Hill 4th turn': _hms('9:29:24'),
      'Run - Zombie Hill 5th turn': _hms('9:33:00'),
      'Run - 32.5 km cut-off':      _hms('9:43:24'),
      'Run - Stavsro':              _hms('10:13:33'),
      'Run - 40K Mountain':         _hms('10:50:48'),
      'Finish':                     _hms('11:04:19'),
    },
  },
  {
    finish: _hms('12:06:20'),
    splits: {
      'Swim finish':                _hms('1:23:53'),
      'Bike Start':                 _hms('1:29:10'),
      'Bike - Øvre Eidfjord':       _hms('1:41:52'),
      'Bike - Enter Gamlevegen':    _hms('1:54:38'),
      'Bike - Vøringfossen':        _hms('2:22:53'),
      'Bike - Garen':               _hms('2:31:10'),
      'Bike - Bjoreio':             _hms('2:45:19'),
      'Bike - Dyranut':             _hms('3:14:26'),
      'Bike - Halne':               _hms('3:32:16'),
      'Bike - Haugastøl':           _hms('4:03:58'),
      'Bike - Geilo':               _hms('4:39:57'),
      'Bike - Kikut':               _hms('4:59:43'),
      'Bike - Skurdalen':           _hms('5:12:01'),
      'Bike - Dagali':              _hms('5:36:36'),
      'Bike - Vasstulan':           _hms('6:07:30'),
      'Bike - Start Imingfjell':    _hms('6:19:49'),
      'Bike - Top Imingfjell':      _hms('6:53:09'),
      'Bike - End Imingfjell':      _hms('7:15:57'),
      'Bike - Austbygde':           _hms('7:45:32'),
      'Bike finish':                _hms('7:53:54'),
      'Run start':                  _hms('7:55:06'),
      'Run - Atraa':                _hms('8:16:31'),
      'Run - 10K':                  _hms('8:38:20'),
      'Run - Tinnsjø':              _hms('9:02:17'),
      'Run - Miland':               _hms('9:24:32'),
      'Run - Zombie Hill base':     _hms('9:50:27'),
      'Run - Zombie Hill 1st turn': _hms('10:01:15'),
      'Run - Zombie Hill 2nd turn': _hms('10:09:42'),
      'Run - Zombie Hill 3rd turn': _hms('10:18:19'),
      'Run - Zombie Hill 4th turn': _hms('10:28:21'),
      'Run - Zombie Hill 5th turn': _hms('10:31:48'),
      'Run - 32.5 km cut-off':      _hms('10:42:03'),
      'Run - Stavsro':              _hms('11:14:16'),
      'Run - 40K Mountain':         _hms('11:51:54'),
      'Finish':                     _hms('12:06:20'),
    },
  },
  {
    finish: _hms('13:06:43'),
    splits: {
      'Swim finish':                _hms('1:22:28'),
      'Bike Start':                 _hms('1:26:25'),
      'Bike - Øvre Eidfjord':       _hms('1:38:52'),
      'Bike - Enter Gamlevegen':    _hms('1:52:48'),
      'Bike - Vøringfossen':        _hms('2:27:44'),
      'Bike - Garen':               _hms('2:37:40'),
      'Bike - Bjoreio':             _hms('2:53:09'),
      'Bike - Dyranut':             _hms('3:28:02'),
      'Bike - Halne':               _hms('3:48:14'),
      'Bike - Haugastøl':           _hms('4:20:41'),
      'Bike - Geilo':               _hms('4:59:31'),
      'Bike - Kikut':               _hms('5:20:54'),
      'Bike - Skurdalen':           _hms('5:33:00'),
      'Bike - Dagali':              _hms('5:59:25'),
      'Bike - Vasstulan':           _hms('6:30:30'),
      'Bike - Start Imingfjell':    _hms('6:43:22'),
      'Bike - Top Imingfjell':      _hms('7:18:59'),
      'Bike - End Imingfjell':      _hms('7:44:44'),
      'Bike - Austbygde':           _hms('8:13:41'),
      'Bike finish':                _hms('8:21:29'),
      'Run start':                  _hms('8:24:20'),
      'Run - Atraa':                _hms('8:50:24'),
      'Run - 10K':                  _hms('9:13:56'),
      'Run - Tinnsjø':              _hms('9:40:05'),
      'Run - Miland':               _hms('10:04:08'),
      'Run - Zombie Hill base':     _hms('10:33:03'),
      'Run - Zombie Hill 1st turn': _hms('10:47:17'),
      'Run - Zombie Hill 2nd turn': _hms('10:56:54'),
      'Run - Zombie Hill 3rd turn': _hms('11:07:39'),
      'Run - Zombie Hill 4th turn': _hms('11:19:31'),
      'Run - Zombie Hill 5th turn': _hms('11:23:24'),
      'Run - 32.5 km cut-off':      _hms('11:35:30'),
      'Run - Stavsro':              _hms('12:10:00'),
      'Run - 40K Mountain':         _hms('12:51:39'),
      'Finish':                     _hms('13:06:43'),
    },
  },
  {
    finish: _hms('14:00:55'),
    splits: {
      'Swim finish':                _hms('1:17:29'),
      'Bike Start':                 _hms('1:21:47'),
      'Bike - Øvre Eidfjord':       _hms('1:33:16'),
      'Bike - Enter Gamlevegen':    _hms('1:46:06'),
      'Bike - Vøringfossen':        _hms('2:21:59'),
      'Bike - Garen':               _hms('2:30:57'),
      'Bike - Bjoreio':             _hms('2:44:53'),
      'Bike - Dyranut':             _hms('3:19:21'),
      'Bike - Halne':               _hms('3:37:44'),
      'Bike - Haugastøl':           _hms('4:06:44'),
      'Bike - Geilo':               _hms('4:42:58'),
      'Bike - Kikut':               _hms('5:06:04'),
      'Bike - Skurdalen':           _hms('5:17:29'),
      'Bike - Dagali':              _hms('5:46:45'),
      'Bike - Vasstulan':           _hms('6:22:12'),
      'Bike - Start Imingfjell':    _hms('6:35:14'),
      'Bike - Top Imingfjell':      _hms('7:15:21'),
      'Bike - End Imingfjell':      _hms('7:40:32'),
      'Bike - Austbygde':           _hms('8:08:34'),
      'Bike finish':                _hms('8:16:28'),
      'Run start':                  _hms('8:18:30'),
      'Run - Atraa':                _hms('8:46:30'),
      'Run - 10K':                  _hms('9:15:18'),
      'Run - Tinnsjø':              _hms('9:49:19'),
      'Run - Miland':               _hms('10:21:23'),
      'Run - Zombie Hill base':     _hms('10:58:34'),
      'Run - Zombie Hill 1st turn': _hms('11:13:15'),
      'Run - Zombie Hill 2nd turn': _hms('11:25:33'),
      'Run - Zombie Hill 3rd turn': _hms('11:38:12'),
      'Run - Zombie Hill 4th turn': _hms('11:51:53'),
      'Run - Zombie Hill 5th turn': _hms('11:56:10'),
      'Run - 32.5 km cut-off':      _hms('12:11:06'),
      'Run - Stavsro':              _hms('12:51:51'),
      'Run - 40K Mountain':         _hms('13:42:54'),
      'Finish':                     _hms('14:00:55'),
    },
  },
  {
    finish: _hms('15:04:00'),
    splits: {
      'Swim finish':                _hms('1:19:00'),
      'Bike Start':                 _hms('1:21:33'),
      'Bike - Øvre Eidfjord':       _hms('1:32:51'),
      'Bike - Enter Gamlevegen':    _hms('1:45:30'),
      'Bike - Vøringfossen':        _hms('2:20:43'),
      'Bike - Garen':               _hms('2:29:42'),
      'Bike - Bjoreio':             _hms('2:43:46'),
      'Bike - Dyranut':             _hms('3:17:54'),
      'Bike - Halne':               _hms('3:35:56'),
      'Bike - Haugastøl':           _hms('4:06:06'),
      'Bike - Geilo':               _hms('4:41:50'),
      'Bike - Kikut':               _hms('5:07:12'),
      'Bike - Skurdalen':           _hms('5:18:10'),
      'Bike - Dagali':              _hms('5:53:26'),
      'Bike - Vasstulan':           _hms('6:24:40'),
      'Bike - Start Imingfjell':    _hms('6:36:09'),
      'Bike - Top Imingfjell':      _hms('7:13:10'),
      'Bike - End Imingfjell':      _hms('7:37:10'),
      'Bike - Austbygde':           _hms('8:03:57'),
      'Bike finish':                _hms('8:11:25'),
      'Run start':                  _hms('8:12:11'),
      'Run - Atraa':                _hms('8:45:07'),
      'Run - 10K':                  _hms('9:17:28'),
      'Run - Tinnsjø':              _hms('9:54:25'),
      'Run - Miland':               _hms('10:23:56'),
      'Run - Zombie Hill base':     _hms('10:58:48'),
      'Run - Zombie Hill 1st turn': _hms('11:14:10'),
      'Run - Zombie Hill 2nd turn': _hms('11:28:31'),
      'Run - Zombie Hill 3rd turn': _hms('11:45:41'),
      'Run - Zombie Hill 4th turn': _hms('12:02:06'),
      'Run - Zombie Hill 5th turn': _hms('12:08:13'),
      'Run - 32.5 km cut-off':      _hms('12:25:18'),
      'Run - Stavsro':              _hms('13:26:45'),
      'Run - 40K Mountain':         _hms('14:35:38'),
      'Finish':                     _hms('15:04:00'),
    },
  },
  {
    finish: _hms('16:01:09'),
    splits: {
      'Swim finish':                _hms('1:14:38'),
      'Bike Start':                 _hms('1:20:11'),
      'Bike - Øvre Eidfjord':       _hms('1:35:30'),
      'Bike - Enter Gamlevegen':    _hms('1:56:55'),
      'Bike - Vøringfossen':        _hms('2:31:16'),
      'Bike - Garen':               _hms('2:40:40'),
      'Bike - Bjoreio':             _hms('2:55:23'),
      'Bike - Dyranut':             _hms('3:29:30'),
      'Bike - Halne':               _hms('3:48:22'),
      'Bike - Haugastøl':           _hms('4:19:35'),
      'Bike - Geilo':               _hms('4:57:13'),
      'Bike - Kikut':               _hms('5:20:00'),
      'Bike - Skurdalen':           _hms('5:31:59'),
      'Bike - Dagali':              _hms('5:59:01'),
      'Bike - Vasstulan':           _hms('6:31:34'),
      'Bike - Start Imingfjell':    _hms('6:44:57'),
      'Bike - Top Imingfjell':      _hms('7:22:57'),
      'Bike - End Imingfjell':      _hms('7:48:53'),
      'Bike - Austbygde':           _hms('8:20:59'),
      'Bike finish':                _hms('8:29:15'),
      'Run start':                  _hms('8:32:30'),
      'Run - Atraa':                _hms('9:01:53'),
      'Run - 10K':                  _hms('9:31:15'),
      'Run - Tinnsjø':              _hms('10:04:27'),
      'Run - Miland':               _hms('10:36:11'),
      'Run - Zombie Hill base':     _hms('11:16:52'),
      'Run - Zombie Hill 1st turn': _hms('11:33:44'),
      'Run - Zombie Hill 2nd turn': _hms('11:46:13'),
      'Run - Zombie Hill 3rd turn': _hms('12:00:08'),
      'Run - Zombie Hill 4th turn': _hms('12:15:04'),
      'Run - Zombie Hill 5th turn': _hms('12:19:58'),
      'Run - 32.5 km cut-off':      _hms('12:35:50'),
      'Run - Stavsro':              _hms('13:48:46'),
      'Run - 40K Mountain':         _hms('15:27:31'),
      'Finish':                     _hms('16:01:09'),
    },
  },
];

// ── Checkpoint data ───────────────────────────────────────────────────────────
// refKey maps each checkpoint to its name in REF.splits for historical timing.
// Checkpoints without refKey are timed by linear km interpolation between
// their nearest refKey neighbours within the segment.

const SWIM = [
  { name: 'Erdal',    km: 0,   lat: 60.467, lon: 6.978, alt: 0  },
  { name: 'Eidfjord', km: 3.8, lat: 60.464, lon: 7.073, alt: 20, refKey: 'Swim finish' },
];
const SWIM_TOTAL = 3.8;

const BIKE = [
  { name: 'Eidfjord',          km: 0,   lat: 60.464, lon: 7.073, alt: 20,   refKey: 'Bike Start'             },
  { name: 'Øvre Eidfjord',     km: 9,   lat: 60.442, lon: 7.108, alt: 280,  refKey: 'Bike - Øvre Eidfjord'   },
  { name: 'Enter Gamlevegen',  km: 12,  lat: 60.443, lon: 7.130, alt: 450,  refKey: 'Bike - Enter Gamlevegen'},
  { name: 'Vøringsfossen',     km: 17.5,lat: 60.433, lon: 7.215, alt: 900,  refKey: 'Bike - Vøringfossen'    },
  { name: 'Garden',            km: 20.5,lat: 60.410, lon: 7.248, alt: 1030, refKey: 'Bike - Garen'           },
  { name: 'Bjoreio',           km: 27,  lat: 60.407, lon: 7.350, alt: 1090, refKey: 'Bike - Bjoreio'         },
  { name: 'Dyranut',           km: 35.5,lat: 60.402, lon: 7.646, alt: 1253, refKey: 'Bike - Dyranut'         },
  { name: 'Halne fjellstugu',  km: 47.8,lat: 60.485, lon: 7.810, alt: 1110, refKey: 'Bike - Halne'           },
  { name: 'Haugastøl',         km: 68.7,lat: 60.514, lon: 7.869, alt: 988,  refKey: 'Bike - Haugastøl'       },
  { name: 'Ustaoset',          km: 78.7,lat: 60.508, lon: 8.018, alt: 990                                    },
  { name: 'Geilo',             km: 90,  lat: 60.532, lon: 8.203, alt: 800,  refKey: 'Bike - Geilo'           },
  { name: 'Kikut',             km: 98,  lat: 60.518, lon: 8.247, alt: 990,  refKey: 'Bike - Kikut'           },
  { name: 'Skurdalen',         km: 103, lat: 60.426, lon: 8.340, alt: 800,  refKey: 'Bike - Skurdalen'       },
  { name: 'Dagali',            km: 114, lat: 60.408, lon: 8.524, alt: 800,  refKey: 'Bike - Dagali'          },
  { name: 'Vasstulan',         km: 125, lat: 60.330, lon: 8.475, alt: 820,  refKey: 'Bike - Vasstulan'       },
  { name: 'Brostrud',          km: 129, lat: 60.290, lon: 8.510, alt: 700                                    },
  { name: 'Start Imingfjell',  km: 135, lat: 60.240, lon: 8.550, alt: 780,  refKey: 'Bike - Start Imingfjell'},
  { name: 'Top Imingfjell',    km: 152, lat: 60.067, lon: 8.660, alt: 1280, refKey: 'Bike - Top Imingfjell'  },
  { name: 'End Imingfjell',    km: 162, lat: 59.985, lon: 8.760, alt: 380,  refKey: 'Bike - End Imingfjell'  },
  { name: 'Austbygde',         km: 180, lat: 59.920, lon: 8.887, alt: 190,  refKey: 'Bike - Austbygde'       },
];
const BIKE_TOTAL = 180;

const RUN = [
  { name: 'Austbygde',          km: 0,    lat: 59.920, lon: 8.887, alt: 190,  refKey: 'Run start'                  },
  { name: 'Atrå',               km: 5.6,  lat: 59.880, lon: 8.900, alt: 130,  refKey: 'Run - Atraa'                },
  { name: '10K',                km: 10,   lat: 59.865, lon: 8.895, alt: 115,  refKey: 'Run - 10K'                  },
  { name: 'Tinnsjø',            km: 13,   lat: 59.846, lon: 8.884, alt: 112,  refKey: 'Run - Tinnsjø'              },
  { name: 'Mæl',                km: 16,   lat: 59.820, lon: 8.850, alt: 110                                        },
  { name: 'Miland',             km: 18,   lat: 59.808, lon: 8.835, alt: 130,  refKey: 'Run - Miland'               },
  { name: 'Dal kirke',          km: 25,   lat: 59.790, lon: 8.760, alt: 200                                        },
  { name: 'Zombie Hill base',   km: 26,   lat: 59.790, lon: 8.750, alt: 210,  refKey: 'Run - Zombie Hill base'      },
  { name: 'Zombie Hill 1st ↩',  km: 27,   lat: 59.797, lon: 8.730, alt: 320,  refKey: 'Run - Zombie Hill 1st turn' },
  { name: 'Zombie Hill 2nd ↩',  km: 28,   lat: 59.804, lon: 8.710, alt: 470,  refKey: 'Run - Zombie Hill 2nd turn' },
  { name: 'Zombie Hill 3rd ↩',  km: 29,   lat: 59.811, lon: 8.692, alt: 610,  refKey: 'Run - Zombie Hill 3rd turn' },
  { name: 'Zombie Hill 4th ↩',  km: 30,   lat: 59.818, lon: 8.674, alt: 760,  refKey: 'Run - Zombie Hill 4th turn' },
  { name: 'Zombie Hill 5th ↩',  km: 30.5, lat: 59.821, lon: 8.667, alt: 850,  refKey: 'Run - Zombie Hill 5th turn' },
  { name: '32.5K cut-off',      km: 32.5, lat: 59.830, lon: 8.662, alt: 940,  refKey: 'Run - 32.5 km cut-off'      },
  { name: 'Stavsro',            km: 37.5, lat: 59.855, lon: 8.668, alt: 1000, refKey: 'Run - Stavsro'              },
  { name: '40K Mountain',       km: 40,   lat: 59.849, lon: 8.652, alt: 1600, refKey: 'Run - 40K Mountain'         },
  { name: 'Gaustatoppen',       km: 42.2, lat: 59.850, lon: 8.650, alt: 1883, refKey: 'Finish'                     },
];
const RUN_TOTAL = 42.2;

// ── Route bearings ────────────────────────────────────────────────────────────
// Bearing (clockwise from north) from one checkpoint to the next.
// Used to classify wind as tailwind / crosswind / headwind.

function computeBearing(lat1, lon1, lat2, lon2) {
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const φ1   = lat1 * Math.PI / 180;
  const φ2   = lat2 * Math.PI / 180;
  const y = Math.sin(dLon) * Math.cos(φ2);
  const x = Math.cos(φ1)  * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(dLon);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

(function initBearings() {
  [SWIM, BIKE, RUN].forEach(seg => {
    for (let i = 0; i < seg.length; i++) {
      const from = i < seg.length - 1 ? seg[i]     : seg[i - 1];
      const to   = i < seg.length - 1 ? seg[i + 1] : seg[i];
      seg[i].routeBearing = computeBearing(from.lat, from.lon, to.lat, to.lon);
    }
  });
})();

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const SYMBOLS = {
  clearsky: '☀️', fair: '🌤️', partlycloudy: '⛅', cloudy: '☁️',
  fog: '🌫️',
  lightrain: '🌦️', rain: '🌧️', heavyrain: '🌧️',
  lightrainshowers: '🌦️', rainshowers: '🌧️', heavyrainshowers: '🌧️',
  lightsleet: '🌨️', sleet: '🌨️', heavysleet: '🌨️',
  lightsleetshowers: '🌨️', sleetshowers: '🌨️', heavysleetshowers: '🌨️',
  lightsnow: '❄️', snow: '❄️', heavysnow: '❄️',
  lightsnowshowers: '❄️', snowshowers: '❄️', heavysnowshowers: '❄️',
  thunder: '⛈️',
  lightrainandthunder: '⛈️', rainandthunder: '⛈️', heavyrainandthunder: '⛈️',
  lightrainshowersandthunder: '⛈️', rainshowersandthunder: '⛈️', heavyrainshowersandthunder: '⛈️',
  lightsleetandthunder: '⛈️', sleetandthunder: '⛈️',
  lightsnowandthunder: '⛈️', snowandthunder: '⛈️',
};

const COMPASS = ['N','NE','E','SE','S','SW','W','NW'];
const cache   = {};

// ── Time helpers ──────────────────────────────────────────────────────────────

function norwayOffset(month) {
  return (month >= 4 && month <= 10) ? 2 : 1;
}

function raceStartUtc(year, month, day, startHour = 5, startMin = 0) {
  const offset = norwayOffset(month);
  return new Date(Date.UTC(year, month - 1, day, startHour - offset, startMin, 0));
}

function formatHMS(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return s > 0
    ? `${h}h ${String(m).padStart(2,'0')}min ${String(s).padStart(2,'0')}s`
    : `${h}h ${String(m).padStart(2,'0')}min`;
}

function formatLocalTime(utcDate, month) {
  const offset = norwayOffset(month);
  const local  = new Date(utcDate.getTime() + offset * 3_600_000);
  const h  = String(local.getUTCHours()).padStart(2, '0');
  const mi = String(local.getUTCMinutes()).padStart(2, '0');
  return `${h}:${mi}`;
}

function finishClock(year, month, day, totalSeconds, startHour = 5, startMin = 0) {
  const offset   = norwayOffset(month);
  const startUtc = Date.UTC(year, month - 1, day, startHour - offset, startMin, 0);
  const local    = new Date(startUtc + (totalSeconds * 1_000) + (offset * 3_600_000));
  return String(local.getUTCHours()).padStart(2, '0') + ':' +
         String(local.getUTCMinutes()).padStart(2, '0');
}

// ── Historical interpolation ──────────────────────────────────────────────────

// Returns interpolated elapsed seconds for cpName at a given finish time.
// Extrapolates linearly if finishSec is outside the reference range.
function interpRef(finishSec, cpName) {
  const finishes = REF.map(r => r.finish);
  let lo, hi, t;

  if (finishSec <= finishes[0]) {
    lo = REF[0]; hi = REF[1];
    t = (finishSec - finishes[0]) / (finishes[1] - finishes[0]);
  } else if (finishSec >= finishes[finishes.length - 1]) {
    lo = REF[finishes.length - 2]; hi = REF[finishes.length - 1];
    t = (finishSec - finishes[finishes.length - 2]) /
        (finishes[finishes.length - 1] - finishes[finishes.length - 2]);
  } else {
    for (let i = 0; i < finishes.length - 1; i++) {
      if (finishes[i] <= finishSec && finishSec <= finishes[i + 1]) {
        lo = REF[i]; hi = REF[i + 1];
        t = (finishSec - finishes[i]) / (finishes[i + 1] - finishes[i]);
        break;
      }
    }
  }

  if (!lo || !hi) return null;
  const loV = lo.splits[cpName];
  const hiV = hi.splits[cpName];
  if (loV === undefined || hiV === undefined) return null;
  return Math.round(loV + t * (hiV - loV));
}

// Computes a time fraction [0..1] within a segment for each checkpoint.
// Checkpoints with a refKey use historical data; others are interpolated
// linearly by km between their nearest refKey neighbours.
function computeSegFracs(finishSec, checkpoints, startKey, endKey) {
  const s0  = interpRef(finishSec, startKey);
  const sN  = interpRef(finishSec, endKey);

  // Fallback to linear km if historical data is unavailable
  if (s0 === null || sN === null || sN <= s0) {
    const totalKm = checkpoints[checkpoints.length - 1].km;
    return checkpoints.map(cp => totalKm > 0 ? cp.km / totalKm : 0);
  }

  const dur = sN - s0;

  // Build km → fraction map for checkpoints that have historical data
  const known = [];
  for (const cp of checkpoints) {
    if (!cp.refKey) continue;
    const el = interpRef(finishSec, cp.refKey);
    if (el !== null) {
      known.push({ km: cp.km, frac: Math.max(0, Math.min(1, (el - s0) / dur)) });
    }
  }
  known.sort((a, b) => a.km - b.km);

  return checkpoints.map(cp => {
    const match = known.find(k => k.km === cp.km);
    if (match) return match.frac;

    // Linear interpolation by km between nearest known fractions
    const totalKm = checkpoints[checkpoints.length - 1].km;
    let lo = { km: 0, frac: 0 };
    let hi = { km: totalKm, frac: 1 };
    for (const k of known) {
      if (k.km <= cp.km && k.km >= lo.km) lo = k;
      if (k.km >= cp.km && k.km <= hi.km) hi = k;
    }
    if (hi.km === lo.km) return lo.frac;
    return lo.frac + (cp.km - lo.km) / (hi.km - lo.km) * (hi.frac - lo.frac);
  });
}

// ── Planner ───────────────────────────────────────────────────────────────────

function getPlanner() {
  const [startHour, startMin] = (document.getElementById('start-time').value || '05:00').split(':').map(Number);
  return {
    startHour,
    startMin,
    swimMin: int('swim-h') * 60 + int('swim-m'),
    t1Sec:   int('t1-m') * 60 + int('t1-s'),
    bikeMin: int('bike-h') * 60 + int('bike-m'),
    t2Sec:   int('t2-m') * 60 + int('t2-s'),
    runMin:  int('run-h') * 60 + int('run-m'),
  };
}

function int(id) { return parseInt(document.getElementById(id).value) || 0; }

function updateTotal() {
  const p        = getPlanner();
  const totalSec = (p.swimMin + p.bikeMin + p.runMin) * 60 + p.t1Sec + p.t2Sec;
  document.getElementById('total-time').textContent = totalSec > 0 ? formatHMS(totalSec) : '—';

  const dateVal = document.getElementById('race-date').value;
  if (dateVal && totalSec > 0) {
    const [year, month, day] = dateVal.split('-').map(Number);
    const p2 = getPlanner();
    document.getElementById('total-finish').textContent =
      `Est. finish: ${finishClock(year, month, day, totalSec, p2.startHour, p2.startMin)}`;
  } else {
    document.getElementById('total-finish').textContent = '';
  }
}

// ── Row building ──────────────────────────────────────────────────────────────

function buildRows(swimStartUtc, planner) {
  const { swimMin, t1Sec, bikeMin, t2Sec, runMin } = planner;
  const swimMs = swimMin * 60_000;
  const t1Ms   = t1Sec  * 1_000;
  const bikeMs = bikeMin * 60_000;
  const t2Ms   = t2Sec  * 1_000;
  const runMs  = runMin  * 60_000;

  const swimEndUtc   = new Date(swimStartUtc.getTime() + swimMs);
  const bikeStartUtc = new Date(swimEndUtc.getTime()   + t1Ms);
  const bikeEndUtc   = new Date(bikeStartUtc.getTime() + bikeMs);
  const runStartUtc  = new Date(bikeEndUtc.getTime()   + t2Ms);

  // Total finish time drives historical interpolation
  const totalSec = (swimMin + bikeMin + runMin) * 60 + t1Sec + t2Sec;

  // Historical fractions within each segment (0 = segment start, 1 = segment end)
  const bikeFracs = computeSegFracs(totalSec, BIKE, 'Bike Start', 'Bike finish');
  const runFracs  = computeSegFracs(totalSec, RUN,  'Run start',  'Finish');

  const rows = [];

  // Swim: only 2 points, linear km is fine
  for (const cp of SWIM) {
    const frac = SWIM_TOTAL > 0 ? cp.km / SWIM_TOTAL : 0;
    const t = new Date(swimStartUtc.getTime() + frac * swimMs);
    rows.push({ leg: 'Swim', cp, time: t });
  }

  rows.push({
    isTransition: true,
    name: 'T1 — Transition',
    durationSec: t1Sec,
    startTime: swimEndUtc,
    endTime: bikeStartUtc,
  });

  for (let i = 0; i < BIKE.length; i++) {
    const t = new Date(bikeStartUtc.getTime() + bikeFracs[i] * bikeMs);
    rows.push({ leg: 'Bike', cp: BIKE[i], time: t });
  }

  rows.push({
    isTransition: true,
    name: 'T2 — Transition',
    durationSec: t2Sec,
    startTime: bikeEndUtc,
    endTime: runStartUtc,
  });

  for (let i = 0; i < RUN.length; i++) {
    const t = new Date(runStartUtc.getTime() + runFracs[i] * runMs);
    rows.push({ leg: 'Run', cp: RUN[i], time: t });
  }

  return rows;
}

// ── Weather ───────────────────────────────────────────────────────────────────

async function fetchWeather(lat, lon, alt) {
  const key = `${lat},${lon}`;
  if (cache[key]) return cache[key];
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact` +
              `?lat=${lat}&lon=${lon}&altitude=${alt}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  cache[key] = data;
  return data;
}

async function fetchOceanData(lat, lon) {
  const key = `ocean:${lat},${lon}`;
  if (cache[key]) return cache[key];
  const url = `https://api.met.no/weatherapi/oceanforecast/2.0/complete?lat=${lat}&lon=${lon}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  cache[key] = data;
  return data;
}

function closestEntry(data, targetTime) {
  const series = data.properties.timeseries;
  if (!series?.length) return null;
  let best = null, minDiff = Infinity;
  for (const entry of series) {
    const diff = Math.abs(new Date(entry.time) - targetTime);
    if (diff < minDiff) { minDiff = diff; best = entry; }
  }
  return minDiff <= 6 * 3_600_000 ? best : null;
}

function symbolEmoji(code) {
  if (!code) return '—';
  return SYMBOLS[code.replace(/_(day|night|polartwilight)$/, '')] || '🌡️';
}

// Arrow points in the direction the wind is blowing TO (FROM + 180°).
// < 2 m/s → calm green. ≥ 2 m/s → bold green/yellow/red by direction.
function windArrow(fromDeg, routeBearing, windSpeed) {
  const rotation = Math.round((fromDeg + 180) % 360);
  let cls;
  if (windSpeed < 2) {
    cls = 'wind-calm';
  } else {
    const windTo = (fromDeg + 180) % 360;
    const diff   = ((windTo - routeBearing + 540) % 360) - 180;
    cls = Math.abs(diff) <= 45  ? 'wind-tail'
        : Math.abs(diff) >= 135 ? 'wind-head'
        : 'wind-cross';
  }
  return `<span class="wind-arrow ${cls}" style="transform:rotate(${rotation}deg)">↑</span>`;
}

function tempClass(temp, leg) {
  if (leg === 'Bike') {
    if (temp < 5)   return 'c-red';
    if (temp <= 12) return 'c-yellow';
    return 'c-green';
  }
  if (leg === 'Run') {
    if (temp < 2 || temp > 25) return 'c-red';
    if (temp <= 7)  return 'c-yellow';
    return 'c-green';
  }
  return ''; // Swim: no specific air-temp rule
}

function waterTempClass(temp) {
  if (temp < 10) return 'c-red';
  if (temp < 15) return 'c-yellow';
  return 'c-green';
}

// Returns exactly 3 current snapshots: swim start, mid-swim, swim end.
// Classified as tail/cross/head relative to the swim bearing (toward Eidfjord).
function analyzeSwimCurrent(oceanData, swimStartUtc, swimMs, swimBearing) {
  if (!oceanData) return [];
  const targets = [
    { label: 'start', time: swimStartUtc },
    { label: 'mid',   time: new Date(swimStartUtc.getTime() + swimMs / 2) },
    { label: 'end',   time: new Date(swimStartUtc.getTime() + swimMs) },
  ];
  return targets.map(({ time }) => {
    const entry = closestEntry(oceanData, time);
    if (!entry) return null;
    const det   = entry.data.instant.details;
    const toDir = det.sea_water_to_direction ?? null;
    const speed = det.sea_water_speed        ?? null;
    if (toDir === null) return null;
    const diff = ((toDir - swimBearing + 540) % 360) - 180;
    const type = Math.abs(diff) <= 45  ? 'tail'
               : Math.abs(diff) >= 135 ? 'head' : 'cross';
    return { time, toDir, speed, type };
  }).filter(Boolean);
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderResults(enriched, year, month, day, planner, waterTemp, swimCurrent = []) {
  const tbody = document.getElementById('forecast-body');
  tbody.innerHTML = '';

  const totalSec = (planner.swimMin + planner.bikeMin + planner.runMin) * 60 + planner.t1Sec + planner.t2Sec;
  const finish   = finishClock(year, month, day, totalSec, planner.startHour, planner.startMin);
  const mo       = MONTHS[month - 1];
  const startStr = `${String(planner.startHour).padStart(2,'0')}:${String(planner.startMin).padStart(2,'0')}`;

  document.getElementById('race-summary').innerHTML =
    `<span><strong>${mo} ${day}, ${year}</strong></span>` +
    `<span>Start: ${startStr} · ${formatHMS(totalSec)} · Est. finish: ${finish}</span>`;

  let lastLeg = null;

  for (const row of enriched) {

    if (row.isTransition) {
      const outTime = formatLocalTime(row.endTime, month);
      const m = Math.floor(row.durationSec / 60);
      const s = row.durationSec % 60;
      const durStr = s > 0
        ? `${m}min ${String(s).padStart(2,'0')}s`
        : `${m}min`;
      const tr = document.createElement('tr');
      tr.className = 'trans-row';
      tr.innerHTML =
        `<td colspan="8">` +
        `<span class="trans-name">${row.name}</span>` +
        `<span class="trans-dur">${durStr}</span>` +
        `<span class="trans-out">out: ${outTime}</span>` +
        `</td>`;
      tbody.appendChild(tr);
      continue;
    }

    if (row.leg !== lastLeg) {
      lastLeg = row.leg;
      const seg = document.createElement('tr');
      seg.className = `seg-header seg-${row.leg.toLowerCase()}`;
      let headerText = row.leg;
      if (row.leg === 'Swim' && waterTemp != null) {
        const wCls = waterTempClass(waterTemp);
        headerText += `<span class="water-temp-note">🌊 Water: <span class="${wCls}">${waterTemp.toFixed(1)}°C</span></span>`;
      }
      if (row.leg === 'Swim' && swimCurrent.length) {
        const parts = swimCurrent.map(c => {
          const rot = Math.round(c.toDir);
          const cls = c.type === 'tail' ? 'wind-tail' : c.type === 'head' ? 'wind-head' : 'wind-cross';
          const spd = c.speed != null ? ` ${c.speed.toFixed(1)}m/s` : '';
          return `${formatLocalTime(c.time, month)} <span class="wind-arrow ${cls}" style="transform:rotate(${rot}deg)">↑</span>${spd}`;
        });
        headerText += `<span class="water-temp-note">Current: ${parts.join(' · ')}</span>`;
      }
      seg.innerHTML = `<td colspan="8">${headerText}</td>`;
      tbody.appendChild(seg);
    }

    const tr = document.createElement('tr');
    tr.className = `leg-${row.leg.toLowerCase()}`;

    const badge = `<span class="badge badge-${row.leg[0]}">${row.leg[0]}</span>`;

    let weatherCells;
    if (!row.entry) {
      weatherCells = `<td class="center no-data" colspan="5">No forecast</td>`;
    } else {
      const inst  = row.entry.data.instant.details;
      const next  = row.entry.data.next_1_hours ?? row.entry.data.next_6_hours ?? null;
      const sym   = next?.summary?.symbol_code ?? '';
      const precip= next?.details?.precipitation_amount ?? null;
      const temp  = inst.air_temperature ?? null;
      const wind  = inst.wind_speed ?? null;
      const dir   = inst.wind_from_direction ?? null;

      const tempStr  = temp   != null ? `${temp.toFixed(1)}°`  : '—';
      const windStr  = wind   != null ? `${wind.toFixed(1)}`   : '—';
      const dirCell  = dir    != null ? windArrow(dir, row.cp.routeBearing ?? 90, wind ?? 0) : '—';
      const rainStr  = precip != null ? `${precip.toFixed(1)}` : '—';
      const cls      = temp   != null ? tempClass(temp, row.leg) : '';

      weatherCells =
        `<td class="center icon">${symbolEmoji(sym)}</td>` +
        `<td class="num temp ${cls}">${tempStr}</td>` +
        `<td class="num">${windStr} m/s</td>` +
        `<td class="center">${dirCell}</td>` +
        `<td class="num">${rainStr} mm</td>`;
    }

    tr.innerHTML =
      `<td><span class="loc">${badge}${row.cp.name}</span></td>` +
      `<td class="num">${row.cp.km}</td>` +
      `<td class="num">${formatLocalTime(row.time, month)}</td>` +
      weatherCells;

    tbody.appendChild(tr);
  }

  document.getElementById('results').classList.remove('hidden');
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function getForecast() {
  const dateVal = document.getElementById('race-date').value;
  if (!dateVal) { showError('Please select a race date.'); return; }

  const [year, month, day] = dateVal.split('-').map(Number);
  const planner = getPlanner();

  if (planner.swimMin <= 0 || planner.bikeMin <= 0 || planner.runMin <= 0) {
    showError('Please set a time for swim, bike, and run.');
    return;
  }

  document.getElementById('results').classList.add('hidden');
  document.getElementById('error-msg').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('get-forecast').disabled = true;

  try {
    const startUtc = raceStartUtc(year, month, day, planner.startHour, planner.startMin);
    const rows     = buildRows(startUtc, planner);

    const swimLoc = SWIM[0]; // Erdal — swim start
    const swimStartUtcTime = startUtc;

    const [enriched, oceanData] = await Promise.all([
      Promise.all(rows.map(async row => {
        if (row.isTransition) return row;
        try {
          const data  = await fetchWeather(row.cp.lat, row.cp.lon, row.cp.alt);
          const entry = closestEntry(data, row.time);
          return { ...row, entry };
        } catch {
          return { ...row, entry: null };
        }
      })),
      fetchOceanData(swimLoc.lat, swimLoc.lon).catch(() => null),
    ]);

    const anyData = enriched.some(r => !r.isTransition && r.entry !== null);
    if (!anyData) {
      showError('No forecast available for that date yet — Yr.no provides forecasts ~9–10 days ahead.');
      return;
    }

    let waterTemp = null;
    let swimCurrent = [];
    if (oceanData) {
      const oe = closestEntry(oceanData, swimStartUtcTime);
      waterTemp    = oe?.data?.instant?.details?.sea_water_temperature ?? null;
      swimCurrent  = analyzeSwimCurrent(
        oceanData, swimStartUtcTime,
        planner.swimMin * 60_000,
        SWIM[0].routeBearing ?? 94,
      );
    }

    renderResults(enriched, year, month, day, planner, waterTemp, swimCurrent);

  } catch (err) {
    showError(`Failed to fetch weather: ${err.message}`);
  } finally {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('get-forecast').disabled = false;
  }
}

function showError(msg) {
  const el = document.getElementById('error-msg');
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ── UI init ───────────────────────────────────────────────────────────────────

function makeOpts(id, min, max, defaultVal, pad = 2) {
  const sel = document.getElementById(id);
  for (let i = min; i <= max; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = String(i).padStart(pad, '0');
    sel.appendChild(opt);
  }
  sel.value = defaultVal;
}

function restrictSwimMinutes() {
  const h    = int('swim-h');
  const mSel = document.getElementById('swim-m');
  const curr = int('swim-m');

  if (h === 2 && mSel.options.length > 16) {
    mSel.innerHTML = '';
    for (let m = 0; m <= 15; m++) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = String(m).padStart(2, '0');
      mSel.appendChild(opt);
    }
    mSel.value = Math.min(curr, 15);
  } else if (h < 2 && mSel.options.length <= 16) {
    mSel.innerHTML = '';
    for (let m = 0; m <= 59; m++) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = String(m).padStart(2, '0');
      mSel.appendChild(opt);
    }
    mSel.value = curr;
  }
  updateTotal();
}

document.addEventListener('DOMContentLoaded', () => {
  // Defaults: swim 1:30 · T1 10min · bike 7:00 · T2 10min · run 8:00
  makeOpts('swim-h', 0, 2, 1, 1);
  makeOpts('swim-m', 0, 59, 30);
  makeOpts('t1-m',   0, 59, 10);
  makeOpts('t1-s',   0, 59, 0);
  makeOpts('bike-h', 4, 15, 7, 1);
  makeOpts('bike-m', 0, 59, 0);
  makeOpts('t2-m',   0, 59, 10);
  makeOpts('t2-s',   0, 59, 0);
  makeOpts('run-h',  3, 18, 8, 1);
  makeOpts('run-m',  0, 59, 0);

  document.getElementById('race-date').value = new Date().toISOString().slice(0, 10);
  updateTotal();

  document.getElementById('swim-h').addEventListener('change', restrictSwimMinutes);
  ['swim-h','swim-m','t1-m','t1-s','bike-h','bike-m','t2-m','t2-s','run-h','run-m'].forEach(id => {
    document.getElementById(id).addEventListener('change', updateTotal);
  });
  document.getElementById('race-date').addEventListener('change', updateTotal);
  document.getElementById('start-time').addEventListener('change', updateTotal);
  document.getElementById('get-forecast').addEventListener('click', getForecast);
});
