'use strict';

// ── Historical reference split data ───────────────────────────────────────────
// Median splits from 1272 Norseman finishers (2018, 2019, 2021, 2022, 2024, 2025), 9 finish-hour groups.
// Source: raceresult.com. All values = elapsed seconds from race start (05:00 local).

function _hms(s) {
  const [h, m, sec] = s.split(':').map(Number);
  return h * 3600 + m * 60 + sec;
}

const REF = [
  {  // ~10h group: 11 athletes, median finish 10:10:16
    finish: _hms('10:10:16'),
    splits: {
      'Swim finish':                     _hms('0:58:26'),
      'Bike Start':                      _hms('1:01:06'),
      'Bike - Øvre Eidfjord':            _hms('1:11:16'),
      'Bike - Enter Gamlevegen':         _hms('1:24:00'),
      'Bike - Vøringfossen':             _hms('1:46:04'),
      'Bike - Garen':                    _hms('1:53:28'),
      'Bike - Bjoreio':                  _hms('2:10:45'),
      'Bike - Dyranut':                  _hms('2:27:57'),
      'Bike - Halne':                    _hms('2:42:14'),
      'Bike - Haugastøl':                _hms('3:05:57'),
      'Bike - Geilo':                    _hms('3:35:18'),
      'Bike - Kikut':                    _hms('3:50:37'),
      'Bike - Skurdalen':                _hms('4:02:07'),
      'Bike - Dagali':                   _hms('4:20:44'),
      'Bike - Vasstulan':                _hms('4:44:17'),
      'Bike - Start Imingfjell':         _hms('4:55:35'),
      'Bike - Top Imingfjell':           _hms('5:23:32'),
      'Bike - End Imingfjell':           _hms('5:36:14'),
      'Bike - Austbygde':                _hms('6:02:29'),
      'Bike finish':                     _hms('6:08:24'),
      'Run start':                       _hms('6:10:15'),
      'Run - Atraa':                     _hms('6:29:39'),
      'Run - 10K':                       _hms('6:51:56'),
      'Run - Tinnsjø':                   _hms('7:14:01'),
      'Run - Miland':                    _hms('7:35:32'),
      'Run - Zombie Hill base':          _hms('7:59:15'),
      'Run - Zombie Hill 1st turn':      _hms('8:09:07'),
      'Run - Zombie Hill 2nd turn':      _hms('8:17:10'),
      'Run - Zombie Hill 3rd turn':      _hms('8:25:21'),
      'Run - Zombie Hill 4th turn':      _hms('8:34:51'),
      'Run - Zombie Hill 5th turn':      _hms('8:38:01'),
      'Run - 32.5 km cut-off':           _hms('8:47:45'),
      'Run - Stavsro':                   _hms('9:15:51'),
      'Run - 40K Mountain':              _hms('10:01:13'),
      'Finish':                          _hms('10:10:16'),
    },
  },
  {  // ~11h group: 48 athletes, median finish 11:05:57
    finish: _hms('11:05:57'),
    splits: {
      'Swim finish':                     _hms('1:01:58'),
      'Bike Start':                      _hms('1:06:40'),
      'Bike - Øvre Eidfjord':            _hms('1:16:40'),
      'Bike - Enter Gamlevegen':         _hms('1:30:18'),
      'Bike - Vøringfossen':             _hms('1:54:26'),
      'Bike - Garen':                    _hms('2:01:46'),
      'Bike - Bjoreio':                  _hms('2:21:40'),
      'Bike - Dyranut':                  _hms('2:40:14'),
      'Bike - Halne':                    _hms('2:56:42'),
      'Bike - Haugastøl':                _hms('3:24:34'),
      'Bike - Geilo':                    _hms('3:57:31'),
      'Bike - Kikut':                    _hms('4:13:28'),
      'Bike - Skurdalen':                _hms('4:25:29'),
      'Bike - Dagali':                   _hms('4:45:12'),
      'Bike - Vasstulan':                _hms('5:10:56'),
      'Bike - Start Imingfjell':         _hms('5:22:20'),
      'Bike - Top Imingfjell':           _hms('5:51:40'),
      'Bike - End Imingfjell':           _hms('6:02:20'),
      'Bike - Austbygde':                _hms('6:35:37'),
      'Bike finish':                     _hms('6:40:20'),
      'Run start':                       _hms('6:43:24'),
      'Run - Atraa':                     _hms('7:06:06'),
      'Run - 10K':                       _hms('7:27:46'),
      'Run - Tinnsjø':                   _hms('7:52:49'),
      'Run - Miland':                    _hms('8:14:14'),
      'Run - Zombie Hill base':          _hms('8:41:34'),
      'Run - Zombie Hill 1st turn':      _hms('8:52:52'),
      'Run - Zombie Hill 2nd turn':      _hms('9:02:22'),
      'Run - Zombie Hill 3rd turn':      _hms('9:12:20'),
      'Run - Zombie Hill 4th turn':      _hms('9:23:16'),
      'Run - Zombie Hill 5th turn':      _hms('9:27:03'),
      'Run - 32.5 km cut-off':           _hms('9:36:28'),
      'Run - Stavsro':                   _hms('10:11:56'),
      'Run - 40K Mountain':              _hms('10:51:00'),
      'Finish':                          _hms('11:05:57'),
    },
  },
  {  // ~12h group: 106 athletes, median finish 12:07:52
    finish: _hms('12:07:52'),
    splits: {
      'Swim finish':                     _hms('1:08:48'),
      'Bike Start':                      _hms('1:12:18'),
      'Bike - Øvre Eidfjord':            _hms('1:24:04'),
      'Bike - Enter Gamlevegen':         _hms('1:38:20'),
      'Bike - Vøringfossen':             _hms('2:04:43'),
      'Bike - Garen':                    _hms('2:13:00'),
      'Bike - Bjoreio':                  _hms('2:34:08'),
      'Bike - Dyranut':                  _hms('2:55:04'),
      'Bike - Halne':                    _hms('3:12:17'),
      'Bike - Haugastøl':                _hms('3:41:16'),
      'Bike - Geilo':                    _hms('4:15:51'),
      'Bike - Kikut':                    _hms('4:34:47'),
      'Bike - Skurdalen':                _hms('4:47:39'),
      'Bike - Dagali':                   _hms('5:11:01'),
      'Bike - Vasstulan':                _hms('5:39:29'),
      'Bike - Start Imingfjell':         _hms('5:51:50'),
      'Bike - Top Imingfjell':           _hms('6:21:06'),
      'Bike - End Imingfjell':           _hms('6:33:25'),
      'Bike - Austbygde':                _hms('7:08:36'),
      'Bike finish':                     _hms('7:20:36'),
      'Run start':                       _hms('7:19:01'),
      'Run - Atraa':                     _hms('7:42:06'),
      'Run - 10K':                       _hms('8:06:22'),
      'Run - Tinnsjø':                   _hms('8:32:41'),
      'Run - Miland':                    _hms('8:57:06'),
      'Run - Zombie Hill base':          _hms('9:24:27'),
      'Run - Zombie Hill 1st turn':      _hms('9:37:08'),
      'Run - Zombie Hill 2nd turn':      _hms('9:49:00'),
      'Run - Zombie Hill 3rd turn':      _hms('9:59:42'),
      'Run - Zombie Hill 4th turn':      _hms('10:12:22'),
      'Run - Zombie Hill 5th turn':      _hms('10:16:06'),
      'Run - 32.5 km cut-off':           _hms('10:25:58'),
      'Run - Stavsro':                   _hms('11:06:04'),
      'Run - 40K Mountain':              _hms('11:48:24'),
      'Finish':                          _hms('12:07:52'),
    },
  },
  {  // ~13h group: 145 athletes, median finish 13:06:16
    finish: _hms('13:06:16'),
    splits: {
      'Swim finish':                     _hms('1:11:27'),
      'Bike Start':                      _hms('1:16:33'),
      'Bike - Øvre Eidfjord':            _hms('1:28:10'),
      'Bike - Enter Gamlevegen':         _hms('1:42:57'),
      'Bike - Vøringfossen':             _hms('2:10:59'),
      'Bike - Garen':                    _hms('2:19:18'),
      'Bike - Bjoreio':                  _hms('2:42:24'),
      'Bike - Dyranut':                  _hms('3:03:58'),
      'Bike - Halne':                    _hms('3:22:46'),
      'Bike - Haugastøl':                _hms('3:52:56'),
      'Bike - Geilo':                    _hms('4:29:51'),
      'Bike - Kikut':                    _hms('4:50:14'),
      'Bike - Skurdalen':                _hms('5:02:52'),
      'Bike - Dagali':                   _hms('5:26:56'),
      'Bike - Vasstulan':                _hms('5:56:24'),
      'Bike - Start Imingfjell':         _hms('6:09:44'),
      'Bike - Top Imingfjell':           _hms('6:44:56'),
      'Bike - End Imingfjell':           _hms('6:57:27'),
      'Bike - Austbygde':                _hms('7:35:07'),
      'Bike finish':                     _hms('7:42:28'),
      'Run start':                       _hms('7:45:42'),
      'Run - Atraa':                     _hms('8:10:28'),
      'Run - 10K':                       _hms('8:37:14'),
      'Run - Tinnsjø':                   _hms('9:05:47'),
      'Run - Miland':                    _hms('9:31:18'),
      'Run - Zombie Hill base':          _hms('10:02:04'),
      'Run - Zombie Hill 1st turn':      _hms('10:16:06'),
      'Run - Zombie Hill 2nd turn':      _hms('10:27:12'),
      'Run - Zombie Hill 3rd turn':      _hms('10:39:31'),
      'Run - Zombie Hill 4th turn':      _hms('10:51:49'),
      'Run - Zombie Hill 5th turn':      _hms('10:56:15'),
      'Run - 32.5 km cut-off':           _hms('11:08:59'),
      'Run - Stavsro':                   _hms('11:54:00'),
      'Run - 40K Mountain':              _hms('12:47:06'),
      'Finish':                          _hms('13:06:16'),
    },
  },
  {  // ~14h group: 276 athletes, median finish 14:05:22
    finish: _hms('14:05:22'),
    splits: {
      'Swim finish':                     _hms('1:16:11'),
      'Bike Start':                      _hms('1:21:52'),
      'Bike - Øvre Eidfjord':            _hms('1:33:52'),
      'Bike - Enter Gamlevegen':         _hms('1:50:16'),
      'Bike - Vøringfossen':             _hms('2:21:09'),
      'Bike - Garen':                    _hms('2:30:25'),
      'Bike - Bjoreio':                  _hms('2:54:28'),
      'Bike - Dyranut':                  _hms('3:19:02'),
      'Bike - Halne':                    _hms('3:39:24'),
      'Bike - Haugastøl':                _hms('4:12:28'),
      'Bike - Geilo':                    _hms('4:51:36'),
      'Bike - Kikut':                    _hms('5:12:57'),
      'Bike - Skurdalen':                _hms('5:26:28'),
      'Bike - Dagali':                   _hms('5:53:12'),
      'Bike - Vasstulan':                _hms('6:26:26'),
      'Bike - Start Imingfjell':         _hms('6:40:30'),
      'Bike - Top Imingfjell':           _hms('7:18:08'),
      'Bike - End Imingfjell':           _hms('7:31:14'),
      'Bike - Austbygde':                _hms('8:11:36'),
      'Bike finish':                     _hms('8:18:58'),
      'Run start':                       _hms('8:19:51'),
      'Run - Atraa':                     _hms('8:48:54'),
      'Run - 10K':                       _hms('9:15:40'),
      'Run - Tinnsjø':                   _hms('9:46:37'),
      'Run - Miland':                    _hms('10:11:52'),
      'Run - Zombie Hill base':          _hms('10:46:14'),
      'Run - Zombie Hill 1st turn':      _hms('11:00:51'),
      'Run - Zombie Hill 2nd turn':      _hms('11:13:02'),
      'Run - Zombie Hill 3rd turn':      _hms('11:26:18'),
      'Run - Zombie Hill 4th turn':      _hms('11:41:12'),
      'Run - Zombie Hill 5th turn':      _hms('11:46:26'),
      'Run - 32.5 km cut-off':           _hms('11:59:29'),
      'Run - Stavsro':                   _hms('12:52:07'),
      'Run - 40K Mountain':              _hms('13:42:54'),
      'Finish':                          _hms('14:05:22'),
    },
  },
  {  // ~15h group: 312 athletes, median finish 14:59:38
    finish: _hms('14:59:38'),
    splits: {
      'Swim finish':                     _hms('1:17:54'),
      'Bike Start':                      _hms('1:24:37'),
      'Bike - Øvre Eidfjord':            _hms('1:37:28'),
      'Bike - Enter Gamlevegen':         _hms('1:53:51'),
      'Bike - Vøringfossen':             _hms('2:25:40'),
      'Bike - Garen':                    _hms('2:35:41'),
      'Bike - Bjoreio':                  _hms('3:01:11'),
      'Bike - Dyranut':                  _hms('3:26:28'),
      'Bike - Halne':                    _hms('3:48:21'),
      'Bike - Haugastøl':                _hms('4:22:51'),
      'Bike - Geilo':                    _hms('5:03:49'),
      'Bike - Kikut':                    _hms('5:26:47'),
      'Bike - Skurdalen':                _hms('5:41:43'),
      'Bike - Dagali':                   _hms('6:10:14'),
      'Bike - Vasstulan':                _hms('6:43:17'),
      'Bike - Start Imingfjell':         _hms('6:57:33'),
      'Bike - Top Imingfjell':           _hms('7:37:35'),
      'Bike - End Imingfjell':           _hms('7:55:52'),
      'Bike - Austbygde':                _hms('8:33:43'),
      'Bike finish':                     _hms('8:41:40'),
      'Run start':                       _hms('8:45:17'),
      'Run - Atraa':                     _hms('9:15:09'),
      'Run - 10K':                       _hms('9:47:53'),
      'Run - Tinnsjø':                   _hms('10:19:39'),
      'Run - Miland':                    _hms('10:48:18'),
      'Run - Zombie Hill base':          _hms('11:23:32'),
      'Run - Zombie Hill 1st turn':      _hms('11:38:29'),
      'Run - Zombie Hill 2nd turn':      _hms('11:51:57'),
      'Run - Zombie Hill 3rd turn':      _hms('12:05:51'),
      'Run - Zombie Hill 4th turn':      _hms('12:20:31'),
      'Run - Zombie Hill 5th turn':      _hms('12:25:40'),
      'Run - 32.5 km cut-off':           _hms('12:39:29'),
      'Run - Stavsro':                   _hms('13:36:31'),
      'Run - 40K Mountain':              _hms('14:30:16'),
      'Finish':                          _hms('14:59:38'),
    },
  },
  {  // ~16h group: 202 athletes, median finish 15:53:02
    finish: _hms('15:53:02'),
    splits: {
      'Swim finish':                     _hms('1:23:40'),
      'Bike Start':                      _hms('1:32:17'),
      'Bike - Øvre Eidfjord':            _hms('1:46:02'),
      'Bike - Enter Gamlevegen':         _hms('2:03:46'),
      'Bike - Vøringfossen':             _hms('2:36:50'),
      'Bike - Garen':                    _hms('2:47:19'),
      'Bike - Bjoreio':                  _hms('3:16:11'),
      'Bike - Dyranut':                  _hms('3:42:46'),
      'Bike - Halne':                    _hms('4:04:22'),
      'Bike - Haugastøl':                _hms('4:40:48'),
      'Bike - Geilo':                    _hms('5:22:45'),
      'Bike - Kikut':                    _hms('5:47:21'),
      'Bike - Skurdalen':                _hms('6:02:10'),
      'Bike - Dagali':                   _hms('6:32:12'),
      'Bike - Vasstulan':                _hms('7:12:06'),
      'Bike - Start Imingfjell':         _hms('7:26:04'),
      'Bike - Top Imingfjell':           _hms('8:10:28'),
      'Bike - End Imingfjell':           _hms('8:23:20'),
      'Bike - Austbygde':                _hms('9:09:26'),
      'Bike finish':                     _hms('9:18:09'),
      'Run start':                       _hms('9:23:34'),
      'Run - Atraa':                     _hms('9:56:08'),
      'Run - 10K':                       _hms('10:30:42'),
      'Run - Tinnsjø':                   _hms('11:07:02'),
      'Run - Miland':                    _hms('11:40:43'),
      'Run - Zombie Hill base':          _hms('12:25:34'),
      'Run - Zombie Hill 1st turn':      _hms('12:42:00'),
      'Run - Zombie Hill 2nd turn':      _hms('12:55:57'),
      'Run - Zombie Hill 3rd turn':      _hms('13:10:48'),
      'Run - Zombie Hill 4th turn':      _hms('13:28:22'),
      'Run - Zombie Hill 5th turn':      _hms('13:34:14'),
      'Run - 32.5 km cut-off':           _hms('13:51:31'),
      'Run - Stavsro':                   _hms('14:38:00'),
      'Run - 40K Mountain':              _hms('15:24:07'),
      'Finish':                          _hms('15:53:02'),
    },
  },
  {  // ~17h group: 92 athletes, median finish 16:55:10
    finish: _hms('16:55:10'),
    splits: {
      'Swim finish':                     _hms('1:28:30'),
      'Bike Start':                      _hms('1:37:08'),
      'Bike - Øvre Eidfjord':            _hms('1:51:38'),
      'Bike - Enter Gamlevegen':         _hms('2:10:23'),
      'Bike - Vøringfossen':             _hms('2:46:40'),
      'Bike - Garen':                    _hms('2:58:30'),
      'Bike - Bjoreio':                  _hms('3:32:04'),
      'Bike - Dyranut':                  _hms('4:02:46'),
      'Bike - Halne':                    _hms('4:30:08'),
      'Bike - Haugastøl':                _hms('5:07:56'),
      'Bike - Geilo':                    _hms('5:56:28'),
      'Bike - Kikut':                    _hms('6:23:24'),
      'Bike - Skurdalen':                _hms('6:39:55'),
      'Bike - Dagali':                   _hms('7:14:17'),
      'Bike - Vasstulan':                _hms('7:56:02'),
      'Bike - Start Imingfjell':         _hms('8:12:20'),
      'Bike - Top Imingfjell':           _hms('9:00:56'),
      'Bike - End Imingfjell':           _hms('9:15:21'),
      'Bike - Austbygde':                _hms('10:07:35'),
      'Bike finish':                     _hms('10:15:44'),
      'Run start':                       _hms('10:23:12'),
      'Run - Atraa':                     _hms('10:57:42'),
      'Run - 10K':                       _hms('11:35:12'),
      'Run - Tinnsjø':                   _hms('12:14:31'),
      'Run - Miland':                    _hms('12:50:11'),
      'Run - Zombie Hill base':          _hms('13:35:16'),
      'Run - Zombie Hill 1st turn':      _hms('13:53:39'),
      'Run - Zombie Hill 2nd turn':      _hms('14:09:58'),
      'Run - Zombie Hill 3rd turn':      _hms('14:24:48'),
      'Run - Zombie Hill 4th turn':      _hms('14:43:04'),
      'Run - Zombie Hill 5th turn':      _hms('14:49:18'),
      'Run - 32.5 km cut-off':           _hms('15:04:55'),
      'Run - Stavsro':                   _hms('16:00:47'),
      'Run - 40K Mountain':              _hms('16:02:50'),
      'Finish':                          _hms('16:55:10'),
    },
  },
  {  // ~18h group: 36 athletes, median finish 17:54:02
    finish: _hms('17:54:02'),
    splits: {
      'Swim finish':                     _hms('1:26:00'),
      'Bike Start':                      _hms('1:34:41'),
      'Bike - Øvre Eidfjord':            _hms('1:49:10'),
      'Bike - Enter Gamlevegen':         _hms('2:09:18'),
      'Bike - Vøringfossen':             _hms('2:49:04'),
      'Bike - Garen':                    _hms('3:01:04'),
      'Bike - Bjoreio':                  _hms('3:37:50'),
      'Bike - Dyranut':                  _hms('4:06:17'),
      'Bike - Halne':                    _hms('4:36:50'),
      'Bike - Haugastøl':                _hms('5:17:30'),
      'Bike - Geilo':                    _hms('6:08:54'),
      'Bike - Kikut':                    _hms('6:39:46'),
      'Bike - Skurdalen':                _hms('6:56:28'),
      'Bike - Dagali':                   _hms('7:29:41'),
      'Bike - Vasstulan':                _hms('8:14:00'),
      'Bike - Start Imingfjell':         _hms('8:31:32'),
      'Bike - Top Imingfjell':           _hms('9:24:28'),
      'Bike - End Imingfjell':           _hms('9:43:22'),
      'Bike - Austbygde':                _hms('10:35:01'),
      'Bike finish':                     _hms('10:44:04'),
      'Run start':                       _hms('10:53:44'),
      'Run - Atraa':                     _hms('11:34:46'),
      'Run - 10K':                       _hms('12:17:42'),
      'Run - Tinnsjø':                   _hms('12:58:54'),
      'Run - Miland':                    _hms('13:38:36'),
      'Run - Zombie Hill base':          _hms('14:31:26'),
      'Run - Zombie Hill 1st turn':      _hms('14:49:26'),
      'Run - Zombie Hill 2nd turn':      _hms('15:06:12'),
      'Run - Zombie Hill 3rd turn':      _hms('15:22:51'),
      'Run - Zombie Hill 4th turn':      _hms('15:40:39'),
      'Run - Zombie Hill 5th turn':      _hms('15:46:38'),
      'Run - 32.5 km cut-off':           _hms('16:03:36'),
      'Run - Stavsro':                   _hms('16:58:09'),
      'Run - 40K Mountain':              _hms('16:51:38'),
      'Finish':                          _hms('17:54:02'),
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
      const legEmoji = { Swim: '🏊 ', Bike: '🚴 ', Run: '🏃 ' };
      let headerText = (legEmoji[row.leg] || '') + row.leg;
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
        headerText += `<span class="water-temp-note current">Current: ${parts.join(' · ')}</span>`;
      }
      seg.innerHTML = `<td colspan="8">${headerText}</td>`;
      tbody.appendChild(seg);
    }

    const tr = document.createElement('tr');
    tr.className = `leg-${row.leg.toLowerCase()}`;

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
      `<td><span class="loc">${row.cp.name}</span></td>` +
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

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);
  themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

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
