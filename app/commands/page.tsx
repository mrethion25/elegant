'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const commandCategories = [
  'All',
  'Music',
  'Moderation',
  'Utility',
  'Fun',
  'Info'
];

const commands = [
  {
    name: '/play',
    description: 'Play music from various platforms',
    category: 'Music',
    usage: '/play [song/url]',
    example: '/play Never Gonna Give You Up'
  },
  {
    name: '/ban',
    description: 'Ban a user from the server',
    category: 'Moderation',
    usage: '/ban [user] [reason]',
    example: '/ban @user Breaking rules'
  },
  {
    name: '/help',
    description: 'get to know all commands ',
    category: 'Utility',
    usage: '/help',
    example: '/help or &help'
  },
  {
    name: '/avatar',
    description: 'Display user avatar',
    category: 'Info',
    usage: '/avatar [user]',
    example: '/avatar @user'
  },
  {
    name: '/meme',
    description: 'Generate random memes',
    category: 'Fun',
    usage: '/meme [template]',
    example: '/meme drake'
  },
  {
  name: '/noprefix',
  description: "join our support server for no prefix.",
  category: 'Prefix',
  usage: '/noprefix',
  example: '/noprefix'
  },
  {
  name: '/prefix',
  description: 'Show or manage the bot prefix.',
  category: 'Prefix',
  usage: '/prefix',
  example: '/prefix'
  },
  {
  name: '/setprefix',
  description: 'Set a new prefix for the bot.',
  category: 'Prefix',
  usage: '/setprefix <prefix>',
  example: '/setprefix !'
  },
  {
  name: '/antinuke',
  description: 'Shows or manages anti-nuke settings.',
  category: 'General',
  usage: '/antinuke',
  example: '/antinuke'
  },
  {
  name: '/extraowner',
  description: 'Add or view extra bot owners.',
  category: 'General',
  usage: '/extraowner',
  example: '/extraowner add @user'
  },
  {
  name: '/unwl',
  description: 'Remove a member from whitelist.',
  category: 'General',
  usage: '/unwl <member>',
  example: '/unwl @user'
  },
  {
  name: '/whitelisted',
  description: 'Show the list of whitelisted members.',
  category: 'General',
  usage: '/whitelisted',
  example: '/whitelisted'
  },
  {
  name: '/whitelistreset',
  description: 'Reset the whitelist.',
  category: 'General',
  usage: '/whitelistreset',
  example: '/whitelistreset'
  },
  {
  name: '/afk',
  description: 'Set AFK status and enable auto-replies.',
  category: 'AFK',
  usage: '/afk [reason]',
  example: '/afk eating'
  },
  {
  name: '/afk_auto',
  description: 'Enable auto-AFK after X minutes of inactivity. Use 0 to disable.',
  category: 'AFK',
  usage: '/afk_auto <minutes>',
  example: '/afk_auto 5'
  },
  {
  name: '/afk_remove',
  description: 'Remove your AFK status.',
  category: 'AFK',
  usage: '/afk_remove',
  example: '/afk_remove'
  },
  {
  name: '/wl',
  description: 'Whitelist a member to bypass moderation.',
  category: 'General',
  usage: '/wl <member>',
  example: '/wl @user'
  },
  {
  name: '/avatar',
  description: "Show a user's avatar.",
  category: 'Information',
  usage: '/avatar [member]',
  example: '/avatar @user'
  },
  {
  name: '/banner',
  description: "Show a user's profile banner.",
  category: 'Information',
  usage: '/banner [member]',
  example: '/banner @user'
  },
  {
  name: '/channelinfo',
  description: 'Show detailed information about a channel.',
  category: 'Information',
  usage: '/channelinfo [channel]',
  example: '/channelinfo #general'
  },
  {
  name: '/ping',
  description: 'Check bot latency.',
  category: 'Information',
  usage: '/ping',
  example: '/ping'
  },
  {
  name: '/serverinfo',
  description: 'View information about the server.',
  category: 'Information',
  usage: '/serverinfo',
  example: '/serverinfo'
  },
  {
  name: '/uptime',
  description: 'Show how long the bot has been online.',
  category: 'Information',
  usage: '/uptime',
  example: '/uptime'
  },
  {
  name: '/ban',
  description: 'Ban a member from the server.',
  category: 'Moderation',
  usage: '/ban <member> [reason]',
  example: '/ban @user spamming'
  },
  {
  name: '/kick',
  description: 'Kick a member from the server.',
  category: 'Moderation',
  usage: '/kick <member> [reason]',
  example: '/kick @user rude behaviour'
  },
  {
  name: '/purge',
  description: 'Delete multiple messages from a channel.',
  category: 'Moderation',
  usage: '/purge <amount>',
  example: '/purge 50'
  },
  {
  name: '/slowmode',
  description: 'Enable slowmode for a channel.',
  category: 'Moderation',
  usage: '/slowmode <seconds>',
  example: '/slowmode 10'
  },
  {
  name: '/softban',
  description: 'Ban & instantly unban a member to delete messages.',
  category: 'Moderation',
  usage: '/softban <member> [reason]',
  example: '/softban @user spam cleanup'
  },
  {
  name: '/timeout',
  description: 'Timeout a member for a specified duration.',
  category: 'Moderation',
  usage: '/timeout <member> <duration>',
  example: '/timeout @user 10m'
  },
  {
    name: '/queue',
    description: 'View music queue',
    category: 'Music',
    usage: '/queue',
    example: '/queue'
  }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = commands.filter(command => {
    const matchesCategory = selectedCategory === 'All' || command.category === selectedCategory;
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Commands</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore all available commands and learn how to use Z+'s powerful features
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {commandCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Commands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCommands.map((command, index) => (
            <motion.div
              key={command.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="moonveil-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-purple-400">{command.name}</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                  {command.category}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{command.description}</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Usage:</span>
                  <code className="block text-sm bg-gray-900/50 p-2 rounded mt-1 text-purple-300">
                    {command.usage}
                  </code>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Example:</span>
                  <code className="block text-sm bg-gray-900/50 p-2 rounded mt-1 text-gray-300">
                    {command.example}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCommands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">No commands found matching your criteria</div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
